import { request } from 'https';
import { RequestParams } from '../interfaces/client.interface';

const BASE_API_HOST = 'api.planethoster.net';

export class Client {
  private apiKey: string;
  private apiUser: string;

  private n0cUserId: number | undefined;

  constructor (apiKey: string, apiUser: string, n0cUserId?: number) {
    this.apiKey = apiKey;
    this.apiUser = apiUser;
    this.n0cUserId = n0cUserId;
  }

  public sendRequest<T> (params: RequestParams): Promise<T> {
    return new Promise((resolve, reject) => {
      const req = request({
        host: BASE_API_HOST,
        method: params.method,
        path: params.path,
        timeout: 15000,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-API-KEY': this.apiKey,
          'X-API-USER': this.apiUser
        }
      }, (res) => {
        const body: any[] = [];

        res.on('data', chunk => {
          body.push(chunk);
        });

        res.on('end', () => {
          try {
            const resp = JSON.parse(Buffer.concat(body).toString());
            resolve(resp);
          } catch (e) {
            reject(e);
          }
        });
      });
      req.on('error', e => {
        reject(e);
      });

      if (params.params) {
        if (this.n0cUserId) {
          params.params = {
            ...params.params,
            id: this.n0cUserId,
          };
        }
        req.write(JSON.stringify(params.params));
      }

      req.end();
    });
  }
}

import { request } from "https";

export interface RequestParams {
  method: 'POST' | 'GET';
  path: string;
}

const BASE_API_HOST = 'api.planethoster.net'

export class Client {

  private apiKey: string;
  private apiUser: string;

  constructor(apiKey: string, apiUser: string) {
    this.apiKey = apiKey;
    this.apiUser = apiUser;
  }

  public sendRequest(params: RequestParams) {
    return new Promise((resolve, reject) => {
      const req = request({
        host: BASE_API_HOST,
        method: params.method,
        path: params.path,
        timeout: 15000,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-API-KEY': this.apiKey,
          'X-API-USER': this.apiUser,
        },
      }, (res) => {
        const body: any[] = [];
        res.setEncoding('utf8');

        res.on('data', chunk => {
          body.push(chunk);
        });

        res.on('end', () => {
          try {
            const resp = JSON.parse(body.toString());
            resolve(resp);
          } catch (e) {
            reject(e);
          }
        });
      });
      req.on('error', e => {
        reject(e);
      });

      req.end();
    });
  }
  
}
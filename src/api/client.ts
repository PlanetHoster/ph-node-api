import { request } from "http";

export interface RequestParams {
  method: 'POST' | 'GET';
  path: string;
}

const BASE_API_HOST = 'https://api.planethoster.net'

export class Client {

  private apiKey: string;
  private apiUser: string;

  constructor(apiKey: string, apiUser: string) {
    this.apiKey = apiKey;
    this.apiUser = apiUser;
  }

  public sendRequest(params: RequestParams) {
    return new Promise((resolve, reject) => {
      request({
        host: BASE_API_HOST,
        method: params.method,
        path: params.path,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-API-KEY': this.apiKey,
          'X-API-USER': this.apiUser,
        },
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
            return;
          }
        });
      });
    });
  }
  
}
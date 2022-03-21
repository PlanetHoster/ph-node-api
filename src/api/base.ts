import { Client } from '../http/client';
import { RequestParams } from '../interfaces/client.interface';

export class Base {
  protected client: Client;

  constructor (client: Client) {
    this.client = client;
  }

  public testConnection () {
    return this.client.sendRequest({
      method: 'GET',
      path: '/reseller-api/test-connection'
    });
  }

  // Maybe we should use this to keep the same syntax with all parameters
  // protected toSnakeCase(params: any) {
  //   const newObj: {[key: string]: string} = {};
  //   Object.keys(params).forEach(k => {
  //     newObj[k.split(/(?=[A-Z])/).join('_').toLowerCase()] = params[k];
  //   });
  //   return newObj;
  // }
}

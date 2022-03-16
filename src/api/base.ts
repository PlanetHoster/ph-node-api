import { Client } from '../http/client';
import { RequestParams } from '../interfaces/client.interface';

export class Base {
  protected client: Client;

  constructor (client: Client) {
    this.client = client;
  }

  testConnection () {
    return this.client.sendRequest({
      method: 'GET',
      path: '/reseller-api/test-connection'
    });
  }
}

import { Client } from './client';

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

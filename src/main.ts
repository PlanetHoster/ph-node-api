import { Client } from './api/client';

class PhNodeApi {
  private apiKey: string;
  private apiUser: string;

  private client: Client;

  constructor (apiKey: string, apiUser: string) {
    this.apiKey = apiKey;
    this.apiUser = apiUser;

    this.client = new Client(this.apiKey, this.apiUser);
  }

  public testConnection () {
    return this.client.sendRequest({
      method: 'GET',
      path: '/reseller-api/test-connection'
    });
  }

  public domain () {
    return null;
  }
}

export = PhNodeApi;

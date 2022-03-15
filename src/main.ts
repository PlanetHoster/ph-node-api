import { Domain } from './api/domain';
import { Client } from './api/client';
import { Base } from './api/base';
import { World } from './api/world';

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
    return new Base(this.client).testConnection();
  }

  /**
   * 
   * @returns Domain object
   * @docs https://apidoc.planethoster.com/en/#tag/Reseller-API
   * 
   */
  public domain () {
    return new Domain(this.client);
  }

  /**
   * 
   * @returns World object
   * @docs https://apidoc.planethoster.com/en/#tag/World-API
   * 
   */
  public world () {
    return new World(this.client);
  }
}

export = PhNodeApi;

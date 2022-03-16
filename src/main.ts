import { 
  Base,
  Domain,
  World,
  N0c 
} from './api';
import { Client } from './http/client';

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

  /**
   * 
   * @returns N0c Object
   * 
   */
  public n0c () {
    return new N0c(this.client);
  }
}

export = PhNodeApi;

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

  constructor (apiKey: string, apiUser: string) {
    this.apiKey = apiKey;
    this.apiUser = apiUser;
  }

  public testConnection () {
    return new Base(new Client(this.apiKey, this.apiUser)).testConnection();
  }

  /**
   * 
   * @returns Domain object
   * @docs https://apidoc.planethoster.com/en/#tag/Reseller-API
   * 
   */
  public domain () {
    return new Domain(new Client(this.apiKey, this.apiUser));
  }

  /**
   * 
   * @returns World object
   * @docs https://apidoc.planethoster.com/en/#tag/World-API
   * 
   */
  public world () {
    return new World(new Client(this.apiKey, this.apiUser));
  }

  /**
   * 
   * @returns N0c Object
   * 
   */
  public n0c (userId: number) {
    return new N0c(new Client(this.apiKey, this.apiUser, userId));
  }
}

export = PhNodeApi;

import { RequestParams } from "../interfaces/client.interface";
import { Base } from "./base";
import { 
  N0cUser,
  N0cDomain,
  N0cDns,
  N0cEmail,
  N0cDatabase,
  N0cCron,
  N0cWordpress,
} from "./n0c/";
import { N0cFtp } from "./n0c/ftp";

export class N0c extends Base {

  /**
   * 
   * @returns N0C User object
   * @docs https://apidoc.planethoster.com/en/#tag/User
   * 
   */
  user () {
    return new N0cUser(this.client);
  }

  /**
   * 
   * @returns N0C Domain object
   * @docs https://apidoc.planethoster.com/en/#tag/Domain
   * 
   */
    domain () {
      return new N0cDomain(this.client);
    }

  /**
   *
   * @returns N0C Dns object
   * @docs https://apidoc.planethoster.com/en/#tag/DNS
   *
   */
  dns () {
    return new N0cDns(this.client);
  }

  /**
   * 
   * @returns N0C Email object
   * @docs https://apidoc.planethoster.com/en/#tag/Email
   * 
   */
    email () {
      return new N0cEmail(this.client);
    }

  /**
   * 
   * @returns N0C Database object
   * @docs https://apidoc.planethoster.com/en/#tag/Database
   * 
   */
    database () {
      return new N0cDatabase(this.client);
    }

  /**
   * 
   * @returns N0C Cron object
   * @docs https://apidoc.planethoster.com/en/#tag/Cron
   * 
   */
    cron () {
      return new N0cCron(this.client);
    }

  /**
   * 
   * @returns N0C Ftp object
   * @docs https://apidoc.planethoster.com/en/#tag/FTP
   * 
   */
    ftp () {
      return new N0cFtp(this.client);
    }

  /**
   * 
   * @returns N0C Ftp object
   * @docs https://apidoc.planethoster.com/en/#tag/Wordpress
   * 
   */
    wordpress () {
      return new N0cWordpress(this.client);
    }
}
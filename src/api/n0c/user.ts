import { N0cId } from '../../interfaces/n0c.interface';
import { Base } from '../base';

const BASE_PATH = '/n0c-api/user';

export class N0cUser extends Base {
  temporaryDomain (params: N0cId) {
    this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/temp-domain`,
      params
    });
  }
}

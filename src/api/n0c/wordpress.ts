import { N0cId } from '../../interfaces/n0c.interface';
import { Base } from '../base';

export class N0cWordpress extends Base {
  getInstalled (params: N0cId) {
    return this.client.sendRequest({
      method: 'GET',
      path: '/n0c-api/wordpress',
      params
    });
  }
}

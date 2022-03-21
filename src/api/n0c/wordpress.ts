import { Base } from '../base';

export class N0cWordpress extends Base {
  getInstalled () {
    return this.client.sendRequest({
      method: 'GET',
      path: '/n0c-api/wordpress'
    });
  }
}

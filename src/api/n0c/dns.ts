import {
  DnsDomain,
  DnsSet
} from '../../interfaces/n0c.interface';
import { Base } from '../base';

const BASE_PATH = '/n0c-api/dns';

export class N0cDns extends Base {
  getRecords (params: DnsDomain) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/get-records`,
      params
    });
  }

  resetZone (params: DnsDomain) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/reset-zone`,
      params
    });
  }

  editZone (params: DnsSet) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/edit-zone`,
      params
    });
  }
}

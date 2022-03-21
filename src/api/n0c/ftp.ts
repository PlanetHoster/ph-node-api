import {
  AddFtp,
  Ftp,
  FtpPassword,
  UpdateFtpPath
} from '../../interfaces/n0c.interface';
import { Base } from '../base';

const BASE_PATH = '/n0c-api/ftp-account';

export class N0cFtp extends Base {
  getAll () {
    return this.client.sendRequest({
      method: 'GET',
      path: '/n0c-api/ftp-accounts'
    });
  }

  add (params: AddFtp) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/add`,
      params
    });
  }

  remove (params: Ftp) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/remove`,
      params
    });
  }

  changePassword (params: FtpPassword) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/password`,
      params
    });
  }

  updatePath (params: UpdateFtpPath) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/update-path`,
      params
    });
  }

  listConnections () {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/active-connection`
    });
  }
}

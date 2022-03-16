import { AddSshKey, N0cId, RemoveSshKey } from '../../interfaces/n0c.interface';
import { Base } from '../base';

const BASE_PATH = '/n0c-api/user';

export class N0cUser extends Base {

  temporaryDomain (params: N0cId) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/temp-domain`,
      params
    });
  }

  disableTempDomain (params: N0cId) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/disable-temp-domain`,
      params
    });
  }

  sshKeys (params: N0cId) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/ssh-keys`,
      params
    });
  }

  addSshKey (params: AddSshKey) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/add-ssh-key`,
      params
    });
  }

  editSshKey (params: RemoveSshKey) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/remove-ssh-key`,
      params
    });
  }

}

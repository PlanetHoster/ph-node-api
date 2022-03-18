import {
  AddDatabaseUser,
  DatabaseName,
  DatabasePermission,
  DatabaseUser,
} from '../../interfaces/n0c.interface';
import { Base } from '../base';

const BASE_PATH = '/n0c-api/database';

export class N0cDatabase extends Base {
  getAll () {
    return this.client.sendRequest({
      method: 'GET',
      path: '/n0c-api/databases',
    });
  }

  add (params: DatabaseName) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/add`,
      params
    });
  }

  remove (params: DatabaseName) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/remove`,
      params
    });
  }

  getUsers () {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/users`,
    });
  }

  addUser (params: AddDatabaseUser) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/user/add`,
      params
    });
  }

  removeUser (params: DatabaseUser) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/user/remove`,
      params
    });
  }

  grantPermission (params: DatabasePermission) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/user/grant-access`,
      params
    });
  }

  removePermission (params: DatabasePermission) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/user/remove-access`,
      params
    });
  }
}

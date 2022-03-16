import { Base } from './base';
import { 
  CreateAccount,
  Resources,
  SuspendAccount,
  WorldId 
} from '../interfaces/world.interface';

const BASE_PATH = '/world-api';

export class World extends Base {
  getAccounts () {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/get-accounts`
    });
  }

  createAccount (params: CreateAccount) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/create-account`,
      params
    });
  }

  suspendAccount (params: SuspendAccount) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/suspend-account`,
      params
    });
  }

  unsuspendAccount (params: WorldId) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/unsuspend-account`,
      params
    });
  }

  modifyResources (params: Resources) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/modify-resources`,
      params
    });
  }
}

import { RequestParams } from '../interfaces/client.interface';
import { CreateAccount, Resources, SuspendAccount, WorldId } from '../interfaces/world.interface';
import { Base } from './base';

export class World extends Base {
  getAccounts () {
    return this.sendWorldRequest({
      method: 'GET',
      path: '/get-accounts'
    });
  }

  createAccount (params: CreateAccount) {
    return this.sendWorldRequest({
      method: 'POST',
      path: '/create-account',
      params
    });
  }

  suspendAccount (params: SuspendAccount) {
    return this.sendWorldRequest({
      method: 'POST',
      path: '/suspend-account',
      params
    });
  }

  unsuspendAccount (params: WorldId) {
    return this.sendWorldRequest({
      method: 'POST',
      path: '/unsuspend-account',
      params
    });
  }

  modifyResources (params: Resources) {
    return this.sendWorldRequest({
      method: 'POST',
      path: '/modify-resources',
      params
    });
  }

  private sendWorldRequest (params: RequestParams) {
    return this.client.sendRequest({
      method: params.method,
      path: `/world-api${params.path}`,
      params: params.params
    });
  }
}

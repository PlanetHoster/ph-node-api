import {
  AddDomain,
  AddSubDomain,
  Domain,
  DomainSuspension,
  ExternalRedirection,
  InternalRedirection,
  N0cId
} from '../../interfaces/n0c.interface';
import { Base } from '../base';

const BASE_PATH = '/n0c-api/domain';

export class N0cDomain extends Base {
  getAll (params: N0cId) {
    return this.client.sendRequest({
      method: 'GET',
      path: '/n0c-api/domains',
      params
    });
  }

  add (params: AddDomain) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/add`,
      params
    });
  }

  remove (params: Domain) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/remove`,
      params
    });
  }

  addSubDomain (params: AddSubDomain) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/add-sub-domain`,
      params
    });
  }

  suspend (params: DomainSuspension) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/suspend`,
      params
    });
  }

  unsuspend (params: DomainSuspension) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/unsuspend`,
      params
    });
  }

  changeDocroot (params: AddDomain) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/change-doc-root`,
      params
    });
  }

  getRedirections (params: N0cId) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/redirections`,
      params
    });
  }

  setInternalRedirection (params: InternalRedirection) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/redirection`,
      params
    });
  }

  setExternalRedirection (params: ExternalRedirection) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/external-redirection`,
      params
    });
  }

  deleteRedirection (params: Domain) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/delete-redirection`,
      params
    });
  }

  getWafLogs (params: Domain) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/waf-logs`,
      params
    });
  }

  getWafRules (params: Domain) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/waf-rules`,
      params
    });
  }

  updateWafRules (params: Domain) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/update-waf-rules`,
      params
    });
  }
}

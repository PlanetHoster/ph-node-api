import {
  AddEmail,
  Email,
  EmailAuth,
  EmailDomainId,
  EmailQuota,
  EmailSuspension
} from '../../interfaces/n0c.interface';
import { Base } from '../base';

const BASE_PATH = '/n0c-api/email';

export class N0cEmail extends Base {
  getAll () {
    return this.client.sendRequest({
      method: 'GET',
      path: '/n0c-api/emails'
    });
  }

  add (params: AddEmail) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/add`,
      params
    });
  }

  remove (params: Email) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/remove`,
      params
    });
  }

  changePassword (params: Email) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/change-password`,
      params
    });
  }

  changeQuota (params: EmailQuota) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/change-quota`,
      params
    });
  }

  suspend (params: EmailSuspension) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/suspend`,
      params
    });
  }

  unsuspend (params: EmailSuspension) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/unsuspend`,
      params
    });
  }

  authentication (params: EmailDomainId) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/auths`,
      params
    });
  }

  enableAuth (params: EmailAuth) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/auth/enable`,
      params
    });
  }

  disableAuth (params: EmailAuth) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/auth/disable`,
      params
    });
  }
}

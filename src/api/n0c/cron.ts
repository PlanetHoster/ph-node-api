import {
  N0cId,
  Cron,
  CronId,
  CronEmail
} from '../../interfaces/n0c.interface';
import { Base } from '../base';

const BASE_PATH = 'n0c-api/cron';

export class N0cCron extends Base {
  getAll (params: N0cId) {
    return this.client.sendRequest({
      method: 'GET',
      path: '/n0c-api/crons',
      params
    });
  }

  add (params: Cron) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/add`,
      params
    });
  }

  remove (params: CronId) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/remove`,
      params
    });
  }

  setCronEmail (params: CronEmail) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/email/set`,
      params
    });
  }

  removeCronEmail (params: N0cId) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/email/remove`,
      params
    });
  }
}

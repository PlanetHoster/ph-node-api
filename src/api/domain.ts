import { Base } from './base';
import { 
  ContactDetails,
  RegisterDomain,
  RegistrarLock,
  RenewDomain,
  SaveDnsRecords,
  SaveNameservers,
  SldTld,
  TransferDomain 
} from '../interfaces/domain.interface';

const BASE_PATH = '/reseller-api';

export class Domain extends Base {
  accountInfo () {
    return this.client.sendRequest({
      method: 'GET',
      path: '/account-info'
    });
  }

  tldPrices () {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/tld-prices`
    });
  }

  checkDomainAvailability (params: SldTld) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/check-availability?sld=${params.sld}&tld=${params.tld}`
    });
  }

  domainInformation (params: SldTld) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/domain-info?sld=${params.sld}&tld=${params.tld}`
    });
  }

  contactDetails (params: SldTld) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/get-contact-details?sld=${params.sld}&tld=${params.tld}`
    });
  }

  saveContactDetails (params: ContactDetails) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/save-contact-details`,
      params
    });
  }

  getRegistrarLock (params: SldTld) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/get-registrar-lock?sld=${params.sld}&tld=${params.tld}`
    });
  }

  saveRegistrarLock (params: RegistrarLock) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/save-registrar-lock`,
      params
    });
  }

  getNameservers (params: SldTld) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/get-nameservers?sld=${params.sld}&tld=${params.tld}`
    });
  }

  saveNameservers (params: SaveNameservers) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/save-nameservers`,
      params
    });
  }

  getDnsRecords (params: SldTld) {
    return this.client.sendRequest({
      method: 'GET',
      path: `${BASE_PATH}/get-ph-dns-records?sld=${params.sld}&tld=${params.tld}`
    });
  }

  saveDnsRecords (params: SaveDnsRecords) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/save-ph-dns-records`,
      params
    });
  }

  deleteZone (params: SldTld) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/delete-ph-dns-zone`,
      params
    });
  }

  emailEppCode (params: SldTld) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/email-epp-code`,
      params
    });
  }

  registerDomain (params: RegisterDomain) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/register-domain`,
      params
    });
  }

  renewDomain (params: RenewDomain) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/renew-domain`,
      params
    });
  }

  transferDomain (params: TransferDomain) {
    return this.client.sendRequest({
      method: 'POST',
      path: `${BASE_PATH}/transfert-domain`,
      params
    });
  }
}

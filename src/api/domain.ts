import { RequestParams } from '../interfaces/client.interface';
import { ContactDetails, RegisterDomain, RegistrarLock, RenewDomain, SaveDnsRecords, SaveNameservers, SldTld, TransferDomain } from '../interfaces/domain.interface';
import { Base } from './base';

export class Domain extends Base {
  accountInfo () {
    return this.sendResellerRequest({
      method: 'GET',
      path: '/account-info'
    });
  }

  tldPrices () {
    return this.sendResellerRequest({
      method: 'GET',
      path: '/tld-prices'
    });
  }

  checkDomainAvailability (params: SldTld) {
    return this.sendResellerRequest({
      method: 'GET',
      path: `/check-availability?sld=${params.sld}&tld=${params.tld}`
    });
  }

  domainInformation (params: SldTld) {
    return this.sendResellerRequest({
      method: 'GET',
      path: `/domain-info?sld=${params.sld}&tld=${params.tld}`
    });
  }

  contactDetails (params: SldTld) {
    return this.sendResellerRequest({
      method: 'GET',
      path: `/get-contact-details?sld=${params.sld}&tld=${params.tld}`
    });
  }

  saveContactDetails (params: ContactDetails) {
    return this.sendResellerRequest({
      method: 'POST',
      path: '/save-contact-details',
      params
    });
  }

  getRegistrarLock (params: SldTld) {
    return this.sendResellerRequest({
      method: 'GET',
      path: `/get-registrar-lock?sld=${params.sld}&tld=${params.tld}`
    });
  }

  saveRegistrarLock (params: RegistrarLock) {
    return this.sendResellerRequest({
      method: 'GET',
      path: '/save-registrar-lock',
      params
    });
  }

  getNameservers (params: SldTld) {
    return this.sendResellerRequest({
      method: 'GET',
      path: `/get-nameservers?sld=${params.sld}&tld=${params.tld}`
    });
  }

  saveNameservers (params: SaveNameservers) {
    return this.sendResellerRequest({
      method: 'POST',
      path: '/save-nameservers',
      params
    });
  }

  getDnsRecords (params: SldTld) {
    return this.sendResellerRequest({
      method: 'GET',
      path: `/get-ph-dns-records?sld=${params.sld}&tld=${params.tld}`
    });
  }

  saveDnsRecords (params: SaveDnsRecords) {
    return this.sendResellerRequest({
      method: 'POST',
      path: '/save-ph-dns-records',
      params
    });
  }

  deleteZone (params: SldTld) {
    return this.sendResellerRequest({
      method: 'POST',
      path: '/delete-ph-dns-zone',
      params
    });
  }

  emailEppCode (params: SldTld) {
    return this.sendResellerRequest({
      method: 'POST',
      path: '/email-epp-code',
      params
    });
  }

  registerDomain (params: RegisterDomain) {
    return this.sendResellerRequest({
      method: 'POST',
      path: '/register-domain',
      params
    });
  }

  renewDomain (params: RenewDomain) {
    return this.sendResellerRequest({
      method: 'POST',
      path: '/renew-domain',
      params
    });
  }

  transferDomain (params: TransferDomain) {
    return this.sendResellerRequest({
      method: 'POST',
      path: '/transfert-domain',
      params
    });
  }

  private sendResellerRequest (params: RequestParams) {
    return this.client.sendRequest({
      method: params.method,
      path: `/reseller-api${params.path}`,
      params: params.params
    });
  }
}

export type LockUnlock = 'Lock' | 'Unlock';

export type RecordType = 'A' | 'AAAA' | 'CNAME' | 'MX' | 'MXE' | 'TXT';

export interface SldTld {
  sld: string;
  tld: string;
}

export interface ContactDetails extends SldTld {
  registrant_first_name: string;
  registrant_last_name: string;
  registrant_email: string;
  registrant_company_name: string;
  registrant_address1: string;
  registrant_address2: string;
  registrant_city: string;
  registrant_postal_code: string;
  registrant_state: string;
  registrant_country_code: string;
  registrant_phone: string;
}

export interface RegistrarLock extends SldTld {
  lock_action: LockUnlock;
}

export interface SaveNameservers extends SldTld {
  ns1: string;
  ns2: string;
  ns3?: string;
  ns4?: string;
  ns5?: string;
}

export interface SaveDnsRecords extends SldTld {
  type1: RecordType;
  hostname1: string;
  address1: string;
  priority1?: number;
}

export interface RegisterDomain extends SldTld {
  period: number;
  ns1: string;
  ns2: string;
  ns3?: string;
  ns4?: string;
  ns5?: string;
  id_protection: boolean;
  register_if_premium: boolean;
  use_planethoster_nameservers: boolean;
  addtl_field?: {};
  registrant_first_name: string;
  registrant_last_name: string;
  registrant_email: string;
  registrant_company_name?: string;
  registrant_address1: string;
  registrant_address2?: string;
  registrant_city: string;
  registrant_postal_code: string;
  registrant_state: string;
  registrant_country_code: string;
  registrant_phone: string;
}

export interface RenewDomain extends SldTld {
  period: number;
}

export interface TransferDomain extends SldTld {
  epp_code: string;
}

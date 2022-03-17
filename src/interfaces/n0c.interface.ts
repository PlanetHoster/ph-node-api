type RedirectionType = 301 | 302;
type EmailAuthType = 'dkim' | 'spf' | 'dMarc';
export interface N0cId {
  id: number;
}

export interface AddSshKey extends N0cId {
  pKey: string;
  comment: string;
  fromIps: string[];
}

export interface EditSshKey extends N0cId {
  key: string;
  comment: string;
  fromIps: string[];
}

export interface RemoveSshKey extends N0cId {
  key: string;
}
export interface Domain extends N0cId {
  domain: string;
}

export interface AddDomain extends Domain {
  docroot: string;
}

export interface AddSubDomain extends AddDomain {
  subDomain: string;
}

export interface DomainSuspension extends N0cId {
  domains: string[];
}

export interface Redirection extends Domain {
  https: boolean;
  rType: RedirectionType;
}

export interface InternalRedirection extends Redirection {
  www: boolean;
}

export interface ExternalRedirection extends Redirection {
  destinationDomain: string;
}

export interface WafRules extends Domain {
  wafDisabledRules: number[];
  append?: boolean;
}

export interface Email extends Domain {
  password: string;
  mailUser: string;
}

export interface EmailDomain {
  mailUser: string;
  domain: string;
}

export interface EmailDomainId extends Domain{
  mailUser: string;
}

export interface AddEmail extends Email {
  quota?: number;
}

export interface EmailQuota extends Domain {
  quota: number;
  mailUser: string;
}

export interface EmailSuspension extends N0cId {
  emails: EmailDomain[];
}

export interface EmailAuth extends EmailDomainId {
  auth: EmailAuthType;
}
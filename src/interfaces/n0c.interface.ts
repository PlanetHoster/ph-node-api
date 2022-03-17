type RedirectionType = 301 | 302;

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
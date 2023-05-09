type RedirectionType = 301 | 302;

type EmailAuthType = 'dkim' | 'spf' | 'dMarc';

type DatabasePrivilegesType = 
'ALTER' |
'ALTER ROUTINE' |
'CREATE' |
'CREATE ROUTINE' |
'CREATE TEMPORARY TABLES' |
'CREATE VIEW' |
'DELETE' |
'DROP' |
'EVENT' |
'EXECUTE' |
'INDEX' |
'INSERT' |
'LOCK TABLES' |
'REFERENCES' |
'SELECT-SHOW VIEW' |
'TRIGGER' |
'UPDATE';

export interface AddSshKey {
  pKey: string;
  comment: string;
  fromIps: string[];
}

export interface EditSshKey {
  key: string;
  comment: string;
  fromIps: string[];
}

export interface RemoveSshKey {
  key: string;
}
export interface Domain {
  domain: string;
}

export interface AddDomain extends Domain {
  docroot: string;
}

export interface AddSubDomain extends AddDomain {
  subDomain: string;
}

export interface DomainSuspension {
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
export interface DnsDomain {
  domain: string;
}

export interface DnsSet {
  domain: string;
  rrsets: string;
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

export interface EmailSuspension {
  emails: EmailDomain[];
}

export interface EmailAuth extends EmailDomainId {
  auth: EmailAuthType;
}

export interface DatabaseName {
  name: string;
}

export interface DatabaseUser {
  dbUser: string;
}

export interface AddDatabaseUser extends DatabaseUser {
  password: string;
}

export interface DatabasePermission {
  databaseName: string;
  databaseUsername: string;
  privileges: DatabasePrivilegesType;
}

export interface Cron {
  schedule: string;
  command: string;
}

export interface CronId {
  cronId: number;
}

export interface CronEmail {
  email: string
}

export interface Ftp extends Domain {
  ftpUser: string;
}

export interface FtpPassword extends Ftp {
  password: string;
}

export interface AddFtp extends FtpPassword {
  path: string;
}

export interface UpdateFtpPath extends Ftp {
  path: string
}
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

export interface DatabaseName extends N0cId {
  name: string;
}

export interface DatabaseUser extends N0cId {
  dbUser: string;
}

export interface AddDatabaseUser extends DatabaseUser {
  password: string;
}

export interface DatabasePermission extends N0cId {
  databaseName: string;
  databaseUsername: string;
  privileges: DatabasePrivilegesType;
}

export interface Cron extends N0cId {
  schedule: string;
  command: string;
}

export interface CronId extends N0cId {
  cronId: number;
}

export interface CronEmail extends N0cId {
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
type Country = 'CA' | 'FR';

export interface WorldId {
  id: number;
}

export interface CreateAccount {
  domain: string;
  country: Country;
  cpu?: number;
  mem?: number;
  io?: number;
  ls?: boolean;
}

export interface SuspendAccount extends WorldId {
  reason: string;
}

export interface Resources extends WorldId {
  cpu?: number;
  mem?: number;
  io?: number;
}

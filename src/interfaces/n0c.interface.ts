
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
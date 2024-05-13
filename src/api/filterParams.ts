export interface GetRegionsParams {
  regions?: string[];
}

export interface GetDisksParams {
  regions?: string[];
  disks?: string[];
}

export interface GetBandsParams {
  regions?: string[];
  disks?: string[];
  bands?: string[];
}

export interface GetMoleculesParams {
  region?: string[];
  disk?: string[];
  bands?: string[];
  molecules?: string[];
}

export interface GetDataParams {
  regions?: string[];
  disks?: string[];
  bands?: string[];
  molecules?: string[];
  data?: string[];
}

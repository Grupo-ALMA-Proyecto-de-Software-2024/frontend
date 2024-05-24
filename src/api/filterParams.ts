export interface GetRegionsParams {
  region?: string[];
}

export interface GetDisksParams {
  region?: string[];
  disk?: string[];
}

export interface GetBandsParams {
  region?: string[];
  disk?: string[];
  band?: string[];
}

export interface GetMoleculesParams {
  region?: string[];
  disk?: string[];
  band?: string[];
  molecule?: string[];
}

export interface GetDataParams {
  region?: string[];
  disk?: string[];
  band?: string[];
  molecule?: string[];
  data?: string[];
}

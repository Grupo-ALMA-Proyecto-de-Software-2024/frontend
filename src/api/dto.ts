export interface CarouselImageDto {
    imageUrl: string;
    title: string;
    description: string;
}

export interface DataDto {
    name: string;
    creationDate: string;
    file: string;
    isViewable: boolean;
    moleculeName: string;  // Parent context
    bandName: string;      // Parent context
    diskName: string;      // Parent context
    regionName: string;    // Parent context
}

export interface MoleculeDto {
    name: string;
    bandName: string;      // Parent context
    diskName: string;      // Parent context
    regionName: string;    // Parent context
    data: DataDto[];
}

export interface BandDto {
    name: string;
    diskName: string;      // Parent context
    regionName: string;    // Parent context
    molecules: MoleculeDto[];
}

export interface DiskDto {
    name: string;
    regionName: string;    // Parent context
    bands: BandDto[];
}

export interface RegionDto {
    name: string;
    disks: DiskDto[];
}

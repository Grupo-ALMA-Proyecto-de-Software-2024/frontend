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
}

export interface MoleculeDto {
    name: string;
    data: DataDto[];
}

export interface BandDto {
    name: string;
    molecules: MoleculeDto[];
}

export interface DiskDto {
    name: string;
    bands: BandDto[];
}

export interface RegionDto {
    name: string;
    disks: DiskDto[];
}

export interface PublicationDto {
    title: string;
    authors: string;
    fullAuthors: string;
    journalInfo: string;
    summary: string;
    imageUrl: string;
    pdfLink: string;
    bibtexLink: string;
    dataLink: string;
    saoNasaLink: string;
}

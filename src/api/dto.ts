// Content Management DTOs
export interface CarouselImageDto {
    imageUrl: string;
    title: string;
    description: string;
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

export enum NewsType {
    OFFICIAL_PRESS = "OP",
    AGEPRO_IN_NEWS = "AN",
}
  
export interface PressNewsDto {
    content: string;
    newsType: NewsType;
    creationDate: string;
}


// Data DTOs
export interface DataDto {
    region: string;
    disk: string;
    band: string;
    molecule: string;
    name: string;
    creationDate: string;
    filepath: string;
    image_link: string | null;
    sizeInMb: number | null;
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
    features: { [key: string]: string };
    bands: BandDto[];
}

export interface RegionDto {
    name: string;
    description: string | null;
    disks: DiskDto[];
}

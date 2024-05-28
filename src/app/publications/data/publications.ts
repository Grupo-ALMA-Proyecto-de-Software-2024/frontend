// data/publications.ts
import almaClient from '@api/client';

export interface Publication {
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

export const fetchPublications = async (): Promise<Publication[]> => {
    try {
        const publications = await almaClient.getPublications();
        if (publications.length === 0) {
            throw new Error('Empty list');
        }
        return publications;
    } catch (error) {
        throw new Error('Failed to fetch publications');
    }
};


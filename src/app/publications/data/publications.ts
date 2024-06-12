// data/publications.ts
import almaClient from '@api/client';
import { PublicationDto } from '@api/dto';

export const fetchPublications = async (): Promise<PublicationDto[]> => {
    try {
        const publications = await almaClient.getPublications();
        if (publications.length === 0) {
            throw new Error('No publications found/have been added yet');
        }
        return publications;
    } catch (error: any) {
        console.error('Failed to fetch publications', error);
        throw new Error(error.message);
    }
};


import almaClient from '@api/client';
import { RegionsPageDto } from '@api/dto';

export const fetchRegions = async (): Promise<RegionsPageDto> => {
  try {
    const regionsPage = await almaClient.getRegionsPage();
    return regionsPage;
  } catch (error: any) {
    console.error('Failed to fetch regions', error);
    throw new Error(error.message);
  }
};

import { PressNewsDto } from "@/api/dto";
import almaClient from "@/api/client";

export const fetchPressNews = async (): Promise<PressNewsDto[]> => {
    try {
        const pressNews = await almaClient.getPressNews();
        if (pressNews.length === 0) {
            throw new Error('No press news found/have been added yet');
        }
        return pressNews;
    } catch (error: any) {
        console.error('Failed to fetch press news', error);
        throw new Error(error.message);
    }
};
import { useState, useEffect } from 'react';
import { CarouselImageDto } from '@api/dto';
import almaClient from '@api/client';

const useCarouselImages = () => {
    const [carouselImages, setCarouselImages] = useState<CarouselImageDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            setIsLoading(true);
            try {
                const images = await almaClient.getCarouselImages();
                if (images.length === 0) {
                    throw new Error('No images found');
                }
                setCarouselImages(images);
            } catch (err) {
                setError('Failed to fetch carousel images');
                setCarouselImages([
                    { imageUrl: '/protoplanetDisk.jpg', title: 'Placeholder', description: 'Failed to load image' }
                ]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImages();
    }, []);

    return { carouselImages, isLoading, error };
};

export default useCarouselImages;
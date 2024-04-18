import React, { useState, useEffect } from 'react';
import Carousel from '@components/carousel/Carousel';
import { CarouselImageDto } from '@api/dto';
import almaClient from '@api/client';

const CarouselContainer: React.FC = () => {
    const [carouselImages, setCarouselImages] = useState<CarouselImageDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            setIsLoading(true);
            try {
                const images = await almaClient.getCarouselImages();
                setCarouselImages(images);
            } catch (err) {
                setError('Failed to fetch carousel images');
                // Optionally set placeholder images here if fetching fails
                setCarouselImages([
                    { imageUrl: '/protoplanetDisk.jpg', title: 'Placeholder', description: 'Failed to load image' }
                ]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error && carouselImages.length === 0) { // Show error only if no images at all are available
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Carousel images={carouselImages} />
        </div>
    );
}

export default CarouselContainer;
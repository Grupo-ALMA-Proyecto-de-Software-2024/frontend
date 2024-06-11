"use client"
import React from 'react';
import Carousel from '@components/carousel/Carousel';
import useCarouselImages from './useCarouselImages';

const CarouselContainer: React.FC = () => {
    const { carouselImages, isLoading, error } = useCarouselImages();

    if (error && carouselImages.length === 0) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Carousel images={carouselImages} isLoading={isLoading} />
        </div>
    );
}

export default CarouselContainer;
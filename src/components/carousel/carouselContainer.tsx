"use client"
import React from 'react';
import Carousel from '@components/carousel/Carousel';
import useCarouselImages from './useCarouselImages';
import styles from "./carousel.module.css";

const CarouselContainer: React.FC = () => {
    const { carouselImages, isLoading, error } = useCarouselImages();

    if (isLoading) {
        return <div className={styles.divCarga}>
                <img src="..\imagen_de_carga.gif" alt="Cargando..."/>
                </div>
    }

    if (error && carouselImages.length === 0) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Carousel images={carouselImages} />
        </div>
    );
}

export default CarouselContainer;
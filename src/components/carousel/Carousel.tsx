import Image from "next/image";
import { useState } from "react";
import styles from "./carousel.module.css";
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { CarouselImageDto } from "@api/dto";

interface CarouselProps {
  images: CarouselImageDto[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
      <div className={styles.carouselContainer}>
        <button onClick={goToPrev} className={styles.lbutton}><NavigateBeforeRoundedIcon className={styles.icon}/></button>
        <div className={styles.carousel}>
          <Image 
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className={styles.carouselImage}
            unoptimized
          />
        </div>
        <button onClick={goToNext} className={styles.rbutton}><NavigateNextRoundedIcon className={styles.icon}/></button>
        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <div 
              key={index} 
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`} 
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
  );
}

export default Carousel;
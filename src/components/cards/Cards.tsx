import Link from 'next/link';
import Image from 'next/image';
import React, { FC, memo } from 'react';
import styles from "./cards.module.css";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
}

const cardsData: CardProps[] = [
  {
    imageSrc: '/cards/motivation.png',
    imageAlt: 'Motivation for AGE-PRO',
    title: 'Motivation',
    description: 'Why do we need AGE-PRO?',
    link: '/overview',
  },
  {
    imageSrc: '/cards/publications.png',
    imageAlt: 'Publications Card',
    title: 'Publications',
    description: 'Browse our scientific publications',
    link: '/publications',
  },
  {
    imageSrc: '/cards/theory.png',
    imageAlt: 'Theory Card',
    title: 'Theory',
    description: 'Learn about our models to interpret AGE-PRO observations',
    link: '/scripts_page',
  },
  {
    imageSrc: '/cards/targets.png',
    imageAlt: 'Targets Card',
    title: 'Targets',
    description: 'Explore the targets in the different star-forming regions studied by AGE-PRO',
    link: '/regions',
  },
  {
    imageSrc: '/cards/data.png',
    imageAlt: 'Data Card',
    title: 'AGE-PRO Data',
    description: 'Access our calibrated datasets and value-added data products',
    link: '/data_page',
  },
  {
    imageSrc: '/cards/press.png',
    imageAlt: 'Press Card',
    title: 'Press',
    description: 'Read about the media coverage of AGE-PRO',
    link: '/press',
  },
  {
    imageSrc: '/cards/team.png',
    imageAlt: 'Team Card',
    title: 'Team',
    description: 'Meet the members of the AGE-PRO collaboration',
    link: '/team',
  }
];

const Cards: FC = () => {
  return (
    <div className={styles.cardContainer}>
      {cardsData.map((card, index) => (
        <Link href={card.link} key={index}>
          <Card {...card} />
        </Link>
      ))}
    </div>
  );
};

Cards.displayName = 'Cards';

export default memo(Cards);

const Card: FC<CardProps> = memo(({ imageSrc, imageAlt, title, description }) => (
  <div className={styles.card}>
    <div className={styles.cardImage}>
      <Image src={imageSrc} alt={imageAlt} width={120} height={120} style={{ objectFit: 'cover' }} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
));

Card.displayName = 'Card';
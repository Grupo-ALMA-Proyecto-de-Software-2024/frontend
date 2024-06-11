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
    imageSrc: '/cards/OverviewIcon.png',
    imageAlt: 'Overview Card',
    title: 'Overview',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/overview',
  },
  {
    imageSrc: '/cards/RegionsIcon.png',
    imageAlt: 'Regions Card',
    title: 'Regions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/regions',
  },
  {
    imageSrc: '/cards/PublicationsIcon.png',
    imageAlt: 'Publications Card',
    title: 'Publications',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/publications',
  },
  {
    imageSrc: '/cards/PressIcon.png',
    imageAlt: 'Press Card',
    title: 'Press',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/press',
  },
  {
    imageSrc: '/cards/TeamIcon.png',
    imageAlt: 'Team Card',
    title: 'Team',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/team',
  },
  {
    imageSrc: '/cards/DataIcon.png',
    imageAlt: 'Data Card',
    title: 'Data',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/data_page',
  },
  {
    imageSrc: '/cards/ScriptsIcon.png',
    imageAlt: 'Scripts Card',
    title: 'Scripts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/scripts_page',
  },
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

export default memo(Cards);

const Card: FC<CardProps> = memo(({ imageSrc, imageAlt, title, description }) => (
  <div className={styles.card}>
    <div className={styles.cardImage}>
      <Image src={imageSrc} alt={imageAlt} width={150} height={150} style={{ objectFit: 'cover' }} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
));
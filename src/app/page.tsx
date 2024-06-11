"use client"

import Link from 'next/link';
import Carousel from "@/components/carousel/Carousel";
import styles from "./home.module.css";
import Image from 'next/image';
import CarouselContainer from '@app/carouselContainer';

const Home: React.FC = () => {
  return (
    <main>
      <div className={styles.carouselContainer}>
        <CarouselContainer />
      </div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <section className={styles.section}>
            <h1>AGE-Pro</h1>
            <h2>“The ALMA Survey of Gas Evolution in PROtoplanetary Disks”</h2>
            <p>It&apos;s an LP
                more than 100 hours of observation that were awarded to an international collaboration of more than
                20 astronomers, who seek to understand the evolution of gaseous material in disks
                protoplanetary organisms, and at the same time understand what physical mechanisms impact their evolution.
                Once we achieve this goal, the collaboration will publish these results in a wave of
                scientific publications that we hope have high impact. In addition, we have new data on
                JWST space telescope that will be analyzed in the future by the collaboration</p>
          </section>

          <section className={styles.section}>
            <h1>About Us</h1>
            <p>The AGE-PRO collaboration is made up of professional astronomers working at universities and
                astronomical observatories, postdoctoral researchers who are part of groups of
                research associated with the astronomers participating in the project, and doctoral students and
                master in astronomy.</p>
          </section>
        </div>

        {/* Right content with image */}
        {/* It is just temporary */}
        <div className={styles.rightContent}>
          <img src="https://media.giphy.com/media/l5JbspfwZ0yjHjlJ0K/giphy.gif" alt="Earth" className={styles.gifImage} />
        </div>
      </div>

      {/* Cards container */}
      <div className={styles.cardContainer}>
        {/* Overview Card */}
        <Link href="/overview">
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/cards/OverviewIcon.png" 
              alt="Overview Card"
              width={150}
              height={150}  
              style={{objectFit: 'cover'}}
            />
          </div>
          <h3>Overview</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </Link>

        {/* Regions Card */}
        <Link href="/regions">
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/cards/RegionsIcon.png" 
                alt="Regions Card" 
                width={150}
                height={150}  
                style={{objectFit: 'cover'}} 
              />
            </div>
            <h3>Regions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

        {/* Publications Card */}
        <Link href="/publications">
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/cards/PublicationsIcon.png" 
                alt="Publications Card" 
                width={150}
                height={150}  
                style={{objectFit: 'cover'}} 
              />
            </div>
            <h3>Publications</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

        {/* Press Card */}
        <Link href="/press">
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/cards/PressIcon.png" 
                alt="Press Card" 
                width={150}
                height={150}  
                style={{objectFit: 'cover'}} 
              />
            </div>
            <h3>Press</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

        {/* Team Card */}
        <Link href="/team">
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/cards/TeamIcon.png" 
                alt="Team Card" 
                width={150}
                height={150}  
                style={{objectFit: 'cover'}} 
              />
            </div>
            <h3>Team</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

        {/* Data Card */}
        <Link href="/data_page">
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/cards/DataIcon.png" 
                alt="Data Card" 
                width={150}
                height={150}  
                style={{objectFit: 'cover'}} 
              />
            </div>
            <h3>Data</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

        {/* Scripts Card */}
        <Link href="/scripts_page">
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/cards/ScriptsIcon.png" 
                alt="Scripts Card" 
                width={150}
                height={150} 
                style={{objectFit: 'cover'}} 
              />
            </div>
            <h3>Scripts</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Home;
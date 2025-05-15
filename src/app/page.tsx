import CarouselContainer from '@/components/carousel/carouselContainer';
import Cards from '@/components/cards/Cards';
import Image from 'next/image';
import styles from "./home.module.css";

const Home: React.FC = () => {
  return (
    <main>
      {/* <div className={styles.carouselContainer}>
        <CarouselContainer />
      </div> */}
      <div className={styles.content}>
      <div className={styles.rightContent}>
          <Image
            src="/logos/AGE-PRO-white-transparent.png"
            alt="Earth"
            width={700}
            height={700}
            className={styles.gifImage}
            unoptimized
          />
        </div>
        
        <div className={styles.leftContent}>
          <section className={styles.section}>
            <h1>AGE-PRO: </h1>
            <h2>The ALMA Survey of Gas Evolution in PROtoplanetary Disks</h2>
            <p>
              AGE-PRO is an ALMA Large Program with more than 100 hours of observation that were awarded to an international collaboration of more than
              20 astronomers, who seek to understand the evolution of gaseous material in disks
              protoplanetary organisms, and at the same time understand what physical mechanisms impact their evolution.
              Once we achieve this goal, the collaboration will publish these results in a wave of
              scientific publications that we hope have high impact. In addition, we have new data on
              JWST space telescope that will be analyzed in the future by the collaboration.
            </p>
          </section>

          <section className={styles.section}>
            <h1>About Us</h1>
            <p>
              The AGE-PRO collaboration is made up of professional astronomers working at universities and
              astronomical observatories, postdoctoral researchers who are part of groups of
              research associated with the astronomers participating in the project, and doctoral students and
              master in astronomy.
            </p>
          </section>
        </div>

       
      </div>

      <Cards />
    </main>
  );
};

export default Home;
import dynamic from 'next/dynamic';
import styles from "./home.module.css";

const CarouselContainer = dynamic(() => import('@/components/carouselContainer/carouselContainer'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Cards = dynamic(() => import('@/components/cards/Cards'), {
  ssr: false,
  loading: () => <p>Loading cards...</p>,
});

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
            <p>
              It's an LP more than 100 hours of observation that were awarded to an international collaboration of more than
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

        <div className={styles.rightContent}>
          <img src="https://media.giphy.com/media/l5JbspfwZ0yjHjlJ0K/giphy.gif" alt="Earth" className={styles.gifImage} />
        </div>
      </div>

      <Cards />
    </main>
  );
};

export default Home;
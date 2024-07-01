import CarouselContainer from '@/components/carousel/carouselContainer';
import Cards from '@/components/cards/Cards';
import Image from 'next/image';
import styles from "./home.module.css";

import { marked } from 'marked';
// or const { marked } = require('marked');

const Markdown = marked.parse(`
<h1>Testing Markdown</h1>

# About Us

The AGE-PRO collaboration is made up of professional astronomers working at universities and
astronomical observatories, postdoctoral researchers who are part of groups of
research associated with the astronomers participating in the project, and doctoral students and
master in astronomy.
`);

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
            <h2>&ldquo;The ALMA Survey of Gas Evolution in PROtoplanetary Disks&rdquo;</h2>
            <p>
              It&apos;s an LP more than 100 hours of observation that were awarded to an international collaboration of more than
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
          <div>
            <div className={styles.section} dangerouslySetInnerHTML={{ __html: Markdown }} />
          </div>
        </div>

        <div className={styles.rightContent}>
          <Image
            src="/giphy.gif"
            alt="Earth"
            width={500}
            height={500}
            className={styles.gifImage}
            unoptimized
          />
        </div>
      </div>

      <Cards />
    </main>
  );
};

export default Home;
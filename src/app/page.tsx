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
            src="AGEPRO_press_release.png"//src="/logos/AGE-PRO-white-transparent.png"
            alt="AGEPRO Press Release Image"
            width={0}
            height={0}
            className={styles.gifImage}
            unoptimized
          />
        </div>
        
        <div className={styles.leftContent}>
          <section className={styles.section}>
            <h1>AGE-PRO: </h1>
            <h2>The ALMA Survey of Gas Evolution in PROtoplanetary Disks</h2>
            <p>
              We are the first ALMA Large Program designed to systematically trace the gas evolution 
              in protoplanetary disks. AGE-PRO collected deep molecular line observations of 30 disks 
              throughout the typical disk lifetime. 
            </p>
          </section>
          <section className={styles.section}>
            <p>
              By combining AGE-PRO observations and state-of-the-art 
              thermo-chemical models, we provide accurate measurements of disk gas mass and size for our 
              30 disks sample. These results are then compared with predictions from two leading 
              theories of disk evolution: turbulent viscosity and magneto-hydrodynamical disk winds. 
            </p>
          </section>

          <section className={styles.section}>
            <p>
              Our AGE-PRO team is an international collaboration of more than 20 astronomers (meet us here!), 
              and our results have been recently published in a wave of scientific publications 
              (AGE-PRO I through XII). 
              All of the datasets employed in this publication are now released to the community, in our 
              dedicated AGE-PRO Data page. 
              Upcoming publications and/or data releases from our collaboraton will be announced here.
            </p>
          </section>

          <section className={styles.section}>
            <h1>Latest news</h1>
            <p>
              &#10025; May 2025: First wave of publications (ApJ Focus issue) and  AGE-PRO calibrated datasets
              from ALMA Bands 6 and 7 are now public!
            </p>
          </section>
        </div>

       
      </div>

      <Cards />
    </main>
  );
};

export default Home;
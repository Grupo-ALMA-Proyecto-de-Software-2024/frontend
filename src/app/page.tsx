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
              AGE-PRO is the first ALMA Large Program specifically designed to systematically trace the evolution of gas 
              in protoplanetary disks. Through deep molecular line observations of 30 disks spanning the typical gas disk 
              lifetime, AGE-PRO provides an unprecedented view into how the gas content in disks evolves over time.
            </p>
          </section>
          <section className={styles.section}>
            <p>
              By combining these observations with advanced thermo-chemical modeling, we deliver robust measurements of 
              disk gas mass and size for our 30-disk sample. These findings are compared against key theoretical 
              frameworks of disk evolution, including turbulent viscosity and magneto-hydrodynamical disk winds.
            </p>
          </section>

          <section className={styles.section}>
            <p>
              AGE-PRO is a collaboration of more than 20 astronomers across multiple institutions 
              (<a href="/team" className="underline">meet the team here!</a>). Our results have been published in a 
              coordinated set of scientific publications (<a href="/publications" className="underline">AGE-PRO I through XII</a>), 
              and all associated datasets are now publicly available through our dedicated <a href="/data_page" className="underline">AGE-PRO Data</a> page. Additional publications and 
              data releases will be announced on this site.
            </p>
          </section>

          <section className={styles.section}>
            <h1>Latest news</h1>
            {/* <p>              
              &#10025; July 2025: ApJ Focus Issue is now available!
            </p> */}
            <p>
              &#10025; June 13, 2025: First wave of <a href="/publications" className="underline"> AGE-PRO publications</a> and <a href="/press" className="underline">press releases</a>.
            </p>
            <p>              
              &#10025; June 13, 2025: AGE-PRO calibrated datasets from ALMA Bands 6 and 7 are available, see <a href="/data_page" className="underline">AGE-PRO Data</a>.
            </p>
          </section>
        </div>

       
      </div>

      <Cards />
    </main>
  );
};

export default Home;
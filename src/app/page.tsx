"use client"

import Link from 'next/link';
import Carousel from "@/components/carousel/Carousel";
import styles from "./home.module.css";
import Image from 'next/image';

const Home: React.FC = () => {
  // Images for carousel
  const carouselImages = [
    { src: "/protoplanetDisk.jpg", alt: "Protoplanet Disk" },
    { src: "/agn.jpg", alt: "Active Galactic Nucleus" },
    { src: "/Sistema-solar.jpg", alt: "Sistema Solar" },
  ];

  return (
    <main>
      <div className={styles.carouselContainer}>
        <Carousel images={carouselImages} />
      </div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <section className={styles.section}>
            <h1>AGE-Pro</h1>
            <h2>“The ALMA Survey of Gas Evolution in PROtoplanetary Disks”</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quo necessitatibus et, alias quaerat, fugit, possimus dicta excepturi 
               ex veritatis esse velit magnam. Aliquid cumque distinctio dicta molestias perspiciatis 
               repellendus recusandae!
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Exercitationem eos ex qui illum iure quasi autem dolorum quas commodi rem. 
               Magni facilis asperiores dolorum aliquam nostrum repellat natus soluta expedita?</p>
          </section>

          <section className={styles.section}>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Inventore, eaque delectus aut beatae enim deserunt nulla 
              doloremque nisi ipsum cupiditate atque nam earum, 
              fuga commodi temporibus a rem laboriosam! Necessitatibus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aut, quas numquam dolore at quod vel et. Mollitia nobis, 
              vero similique cupiditate laboriosam nesciunt, 
              distinctio quia laudantium nemo natus facilis excepturi?</p>
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

        {/* Disks Card */}
        <Link href="/disks">
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/cards/DisksIcon.png" 
                alt="Disks Card" 
                width={150}
                height={150}  
                style={{objectFit: 'cover'}} 
              />
            </div>
            <h3>Disks</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

        {/* Visualizations Card */}
        <Link href="/visualizations">
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/cards/VisualizationsIcon.png" 
                alt="Visualizations Card" 
                width={150}
                height={150}  
                style={{objectFit: 'cover'}}
              />
            </div>
            <h3>Visualizations</h3>
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
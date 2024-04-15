import Image from 'next/image'; 
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image 
                  src="/logos/logo.png" 
                  alt="AGE-Pro Icon" 
                  width={75} 
                  height={75} 
                  className={styles.mainImage}
                />
            </div>
            <div className={styles.imagesContainer}>
                <a href="https://www.almaobservatory.org/en/home/">
                  <Image 
                    src="/logos/AlmaIcon.jpg" 
                    alt="Alma Icon" 
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                </a>
                <a href="https://www.nrao.cl/">
                  <Image 
                    src="/logos/NRAO.png" 
                    alt="NRAO Icon" 
                    width={50} 
                    height={50} 
                    className={styles.image}
                  />
                </a>
                <a href="https://www.nao.ac.jp/en/">
                  <Image 
                    src="/logos/NAOJ.png" 
                    alt="NAOJ Icon" 
                    width={50} 
                    height={50} 
                    className={styles.image}
                  />
                </a>
                <a href="https://www.eso.org/public/">
                  <Image 
                    src="/logos/ESOIcon.png" 
                    alt="ESO Icon" 
                    width={50} 
                    height={50} 
                    className={styles.image}
                  />
                </a>
            </div>
            <div className={styles.text}>
                Age-PRO Large Program from ALMA © All Rights Are Reserved.
            </div>
        </div>
    );
};

export default Footer;

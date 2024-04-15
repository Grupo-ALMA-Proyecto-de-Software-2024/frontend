import type { Metadata } from "next";
import Image from 'next/image';
import styles from './visualizations.module.css'

export const metadata: Metadata = {
    title: "Alma: Age-PRO - Visualizations",
    description: "Generated by create next app",
  };

const Visualizations = () => {
    return (
        <div className={styles.container}>
      
            <h1 className={styles.title}>
                Visualizations
            </h1>

            <div className={styles.row}>
                <div className="col-md-6">
                    <div className={styles.fitText}>
                        <video src="https://alma-maps.info/images/visualizations/MAPS_channel_maps_gallery_IanCzekala.mp4" className={styles.videoContainer} controls loop>
                        
                         Your browser does not support the video tag.
                        </video> 
                    </div>
                </div>
                <div className={styles.fitText}>
                <h3>Gallery of channel maps</h3>
                <p>by Ian Czekala</p>
                <p>This is a video gallery of eight representative transitions (columns) observed in the five MAPS disks (rows). Each disk has been rotated and velocity-dilated to synchronize with the others. Note the hyperfine satellite lines visible for HCN 3-2 and C<sub>2</sub>H 3-2. The complex, diffuse structures seen in <sup>12</sup>CO 2-1 towards GM&nbsp;Aur are discussed in <a href="publications.html#MAPS_XIX">MAPS&nbsp;XIX</a>. </p>
                </div>
            </div>
    
            &nbsp;
        </div>
    );
};

export default Visualizations;
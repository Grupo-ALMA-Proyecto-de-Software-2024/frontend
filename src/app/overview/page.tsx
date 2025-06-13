import type { Metadata } from "next";
import Image from 'next/image';
import styles from './overview.module.css'

export const metadata: Metadata = {
    title: "AGE-PRO - Motivation",
    description: "Why do we need AGE-PRO?",
  };

const Overview = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Motivation
            </h1>
            <div className={styles.line}></div>
            <h2 className={styles.subtitle}>
            AGE-PRO aims to systematically trace the evolution of gas disk mass and size throughout the lifetime 
            of protoplanetary disks.
            </h2>
            <p className={styles.description}>
            Protoplanetary disks around young stars are the birthplaces of planets. The structure of these disks and their 
            lifetime determine when, where, and what kinds of planets can form. Therefore, our understanding of how planets 
            form requires a clear picture of the evolution of the gas and dust in protoplanetary disks. While dust evolution 
            has been intensely studied—thanks in large part to high-resolution observations from ALMA—our understanding of 
            the gas, which makes up the bulk part of the disk mass, remains limited.
            </p>
            
            <p className={styles.description}>
            Gas plays an important role in almost every step of planet formation: it regulates the movement and evolution of 
            dust grains, fuels the growth of planetary atmospheres, and governs the migration of young planets. The mass and 
            size of the gas disk are especially critical. They influence whether a planet becomes a gas giant, an icy giant, 
            or a rocky super-Earth, and whether it forms at all. However, direct measurements of disk gas mass—and its 
            evolution over time—have lagged behind dust constraints, leaving a major gap in our understanding.
            </p>

            <p className={styles.description}>
            A key challenge lies in deciphering how protoplanetary disks evolve over their 1-10 million-year lifetimes. 
            Competing theories—such as evolution driven by turbulent viscosity or by magneto-hydrodynamic (MHD) disk 
            winds—make different predictions about how disk gas disperses and how disk sizes change with time. Population 
            studies of disk fractions and dust masses suggest that disks evolve, but they do not directly constrain the 
            behavior of the gas component.
            </p>

            <p className={styles.description}>
            To fill this critical gap, we put forward AGE-PRO, the ALMA survey of Gas Evolution in PROtoplanetary disks, 
            that systematically surveys the gas in 30 protoplanetary disks spanning ages from 0.5 to 6 million years. 
            The two major goals of our program are:
            </p>
            
            <p className={styles.description}>
            &#10025; Build a legacy dataset of high-quality molecular line observations that allow robust and uniform measurements 
            of gas masses and sizes across the disk lifetime.
            </p>

            <p className={styles.description}>
            &#10025; Test theoretical models of global disk evolution—such as viscous accretion and MHD-driven winds—by comparing 
            their predictions to observed trends in gas mass and disk size with age. 
            </p>

            <p className={styles.description}>
            By directly tracing the gas evolution of disks over time, AGE-PRO provides essential constraints for the physical 
            processes that govern disk dispersal and planet formation. Its results serve as a cornerstone for future work 
            connecting disk evolution to planetary architectures, and offer a new empirical foundation for interpreting 
            observations from ALMA, JWST, and beyond.
            </p>

            <figure className={styles.disk_schematicContainer}>
                <Image src="/HR_diagram.png" alt="disk_schematic" fill className={styles.diskSchematicImage}></Image>
            </figure>
            <figcaption className={styles.figcaption}>
            The 30 protoplanetary disks surveyed by the AGE-PRO program, to trace gas disk evolution spanning over the 
            typical disk lifetime. These disks were selected from three nearby-star forming regions: Ophiuchus (0.5-1 Myr), 
            Lupus (1-3 Myr), and Upper Sco (2-6 Myr) to represent three critical phases of disk evolution: the embedded disk, 
            middle-aged, and the end of gas disk lifetime. 
            </figcaption>

        </div>
    );
};

export default Overview;
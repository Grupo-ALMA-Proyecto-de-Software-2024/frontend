import Image from 'next/image';
import styles from './overview.module.css'

const Overview = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Overview
            </h1>
            <div className={styles.line}></div>
            <h2 className={styles.subtitle}>
            Planets form and obtain their compositions in disks around young stars, 
            and the outcome of this process is intimately linked to the disk chemistry and structure.
            </h2>
            <p className={styles.description}>
            &apos;Molecules with ALMA at Planet-forming Scales&apos; (MAPS) is an ALMA Large Program (2018.1.01055.L) 
            designed to expand our understanding of the chemistry of planet formation by exploring protoplanetary 
            disk chemical structures down to 10 au scales.

            Together these observations provide constraints on a range of disk properties related to planet formation. In particular, MAPS was designed to answer the following key questions...
            </p>
            <ul className={styles.list}>
                <li>How are dust and chemical substructures linked?</li>
                <li>Where do molecules reside vertically in the disks?</li>
                <li>What are the main organic reservoirs, C/N/O/S, and D/H ratios in the planet-forming disk regions?</li>
                <li>How can we probe ionization and dynamic disk processes?</li>
            </ul>
            <figure className={styles.disk_schematicContainer}>
                <Image src="/MAPS/disk_schematic.png" alt="disk_schematic" fill className={styles.diskSchematicImage}></Image>
            </figure>
            <figcaption className={styles.figcaption}>
            A schematic representation of the interlinked physical and chemical processes that occur in protoplanetary disks, 
            and the open questions that MAPS has been designed to answer (adapted from Öberg & Bergin 2021).
            </figcaption>
            <p className={styles.description}>
            The MAPS program focuses on five disks — around IM Lup, GM Aur, AS 209, HD 163296, and MWC 480 — 
            in which dust substructures are detected and planet formation appears to be ongoing. 
            We observed these disks in 4 spectral setups in ALMA Band 3 and Band 6, 
            which together cover approximately 50 molecular lines from 20 different chemical species.
            </p>
            <figure className={styles.disk_schematicContainer}>
                <Image src="/MAPS/image1.png" alt="image1" fill className={styles.diskSchematicImage}></Image>
            </figure>
            <figcaption className={styles.figcaption}>
            The 20 molecular faces of the HD 163296 disk. These comprise a representative, 
            but non-exhaustive, set of zeroth moment maps towards HD 163296 (from MAPS I, Öberg et al. 2021).
            </figcaption>
            <p className={styles.description}>
            The program overview and data calibration is presented in MAPS I, 
            and the imaging strategy in MAPS II. Some key science results are:
            </p>
            <ul className={styles.list}>
                <li>At the MAPS spatial resolution, molecular emission presents rich substructures, 
                    resulting in over 200 identified rings, gaps, and plateaus within the program (MAPS III). 
                    This suggests that disk gas properties, including the chemical composition, 
                    as well as dust properties (MAPS XIV) vary substantially on small scales in disks, 
                    and therefore that planets form in chemically distinct environments across disks.</li>
                <li>CO isotopologue emission is key to constrain structure and dynamics of planet-forming disks. 
                    In MAPS, the CO isotopologue vertical emission structure yielded 2D temperature structures (MAPS IV), which are key to anchoring disk models (MAPS XVII & MAPS XX), 
                    and deriving the temperatures of the planet-forming disk midplanes. 
                    The CO isotopologue radial profiles revealed a reduced CO abundance across the disks, 
                    while the CO radial abundance structure constrains planet formation models (MAPS V) and inner disk pebble masses (MAPS XV).</li>
                <li>MAPS CO data was also used to characterize a disk-driven wind (MAPS XVI), 
                    spirals and kinematic signatures of planets (MAPS XVIII), 
                    and the likely presence of infalling material onto one of the disks (MAPS XIX).</li>
                <li>The MAPS disks are rich in simple and complex organic molecules (MAPS VI & MAPS IX), 
                    especially in the inner 50 au disk regions, 
                    which implies planets forming in these disks are assembling in an organically rich environment.
                    </li>
                <li>Molecular pairs — C2H/CO and CS/SO — constrain C/O ratios and we found very elevated C/O ratios in multiple disks, 
                    indicating that CO is not the dominant C-carrier in the disk atmosphere and molecular layers (MAPS VII, MAPS VIII & MAPS XII).</li>
                <li>Finally, MAPS included probes of deuterium fractionation, photochemistry, and ionization, 
                    which are all important to interpret the volatile reservoirs in the Solar System, and predict the volatile content of exoplanets. 
                    We found order-of-magnitude variations in molecular D/H ratios across disks, large PDR-like disk regions, 
                    and provide empirical constraints in the ionization fraction in the disk molecular layers (MAPS X, MAPS XI & MAPS XIII).</li>
            </ul>
            <p className={styles.description}>
            Together, our results demonstrate the utility of deep, 
            high-resolution ALMA observations of molecular lines to explore the chemistry that affects and probes planet formation in disks.
            </p>
            <p className={styles.description}>
            In addition to the MAPS publications, 
            all data products and analysis scripts are publicly available from our dedicated download page.
            </p>
        </div>
    );
};

export default Overview;
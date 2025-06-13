import type { Metadata } from "next";
import Image from 'next/image';
import styles from './scripts.module.css'
import { Divider } from 'antd';

export const metadata: Metadata = {
    title: "AGE-PRO - Theory",
    description: "Learn about our models to interpret AGE-PRO observations",
  };

const ScriptsPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
            Theoretical Models
            </h1>
            <div className={styles.line}></div>
            <h2 className={styles.subtitle}>
            There are several types of models involved in the AGE-PRO collaboration in order to compare disk evolution
             simulations with the AGE-PRO data. This includes: thermochemical models, disk population models, 
             dust evolution and radiative transfer simulations.
            </h2>
            <p className={styles.description}>
            &#10025; Trapman et al. (AGE-PRO V) constrain gas disk masses by comparing observed line fluxes of 
            CO isotopologues and N₂H⁺, CO gas disk sizes, and 1.3 mm continuum fluxes with a large grid of models 
            computed using the thermochemical code DALI 
            (<a href="https://ui.adsabs.harvard.edu/abs/2012A&A...541A..91B" className="underline">Bruderer et al. 2012</a>).  
            DALI iteratively solves the radiative transfer, time-dependent chemistry, and thermal balance to compute the chemical 
            and thermal structure of the disk. It determines the dust and gas temperatures, as well as molecular level 
            populations and line emission. 
            For the AGE-PRO analysis, the models incorporate CO isotope-selective chemistry and photodissociation to improve accuracy 
            in interpreting CO isotopologue emission. The predicted line fluxes from the model grid, along with the MCMC fitting routine 
            used to compare the models with observations, are available 
            in <a href="https://zenodo.org/records/15148628" className="underline">zenodo</a>.
            </p>
            
            <figure className={styles.disk_schematicContainer}>
                <Image src="/theory/Theory_1.png" alt="AGE-PRO V Figure" fill className={styles.diskSchematicImage}></Image>
            </figure>
            <figcaption className={styles.figcaption}>
            Figure from Trapman et al. (AGE-PRO V). Comparison between the line luminosities for the AGE-PRO sources in 
            Lupus and Upper Sco and the results from the thermochemical disk models.
            </figcaption>

            <p className={styles.description}>
            &#10025; Kurtovic et al. (AGE-PRO VI) and Anania et al. (AGE-PRO VIII) use Dustpy, which is a gas and dust 
            evolution code introduced 
            in <a href="https://ui.adsabs.harvard.edu/abs/2022ApJ...935...35S/abstract" className="underline">Stammler & Birnstiel (2022)</a>, 
            which includes the dynamics and growth of dust particles simultaneously in protoplanetary disks based on the work 
            of <a href="https://ui.adsabs.harvard.edu/abs/2010A%26A...513A..79B/abstract" className="underline">Birnstiel et al. (2010).</a> Dustpy 
            is publicly available at <a href="https://stammler.github.io/dustpy/" className="underline">https://stammler.github.io/dustpy/</a>.
            </p>

            <p className={styles.description}>
            In Kurtovic et al. (AGE-PRO VI), both the gas and dust evolution are calculated. For gas evolution, 
            it is assumed viscous evolution, while for the dust evolution different models with dust traps 
            were assumed. In Kurtovic et al. (AGE-PRO VI), radiative transfer models were performed using 
            the publicly available code <a href="https://www.ita.uni-heidelberg.de/~dullemond/software/radmc-3d/" className="underline">RADMC-3D</a>,
            published in <a href="https://ui.adsabs.harvard.edu/abs/2012ascl.soft02015D/abstract" className="underline">Dullemond et al. (2012)</a>. 
            For the calculation of the dust opacities, 
            we use <a href="https://github.com/cdominik/optool?tab=readme-ov-file" className="underline">optool</a>, published 
            in <a href="" className="underline">Dominik et al. (2021)</a>.   
            To access the scripts used to run the Dustpy, RADMC-3D, or optool calculations used in the 
            AGE-PRO collaboration, please contact <a href="mailto:kurtovic@mpe.mpg.de" className="underline">Dr. Nicolas Kurtovic</a>.
            </p>

            <figure className={styles.disk_schematicContainer}>
                <Image src="/theory/Theory_2.png" alt="AGE-PRO VI Figure" fill className={styles.diskSchematicImage}></Image>
            </figure>
            <figcaption className={styles.figcaption}>
            Figure from Kurtovic et al. (AGE-PRO VI), showing an example of the radial (left panel) and vertical (middle and right panels) 
            dust density distribution assuming three dust traps in the disk.
            </figcaption>

            <p className={styles.description}>
            In Anania et al. (AGE-PRO VIII) both gas and dust evolution models of smooth discs were performed 
            using the grid-based code DustPy presented 
            in <a href="https://ui.adsabs.harvard.edu/abs/2022ApJ...935...35S/abstract" className="underline">Stammler & Birnstiel (2022)</a>.
            For these models, external photoevaporation is included based on the work 
            by <a href="https://ui.adsabs.harvard.edu/abs/2024A%26A...681A..84G/abstract" className="underline">Garate et al. (2024)</a> 
            and <a href="https://ui.adsabs.harvard.edu/abs/2020MNRAS.492.1279S/abstract" className="underline">Sellek et al. (2020)</a>, 
            using the <a href="https://github.com/thaworth-qmul/FRIEDgrid" className="underline">FRIED grid</a> developed 
            by Tom Haworth, recently updated and published 
            in <a href="https://ui.adsabs.harvard.edu/abs/2023MNRAS.526.4315H/abstract" className="underline">Haworth et al. (2023)</a>. 
            A repository with the latest implementation of external photoevaporation 
            in Dustpy is available <a href="https://github.com/Rossella4712/External_Photoevaporation_FRIEDv2_module_dustpy" className="underline">here</a>.
            </p>

            <figure className={styles.disk_schematicContainer}>
                <Image src="/theory/Theory_3.png" alt="AGE-PRO VIII Figure" fill className={styles.diskSchematicImage}></Image>
            </figure>
            <figcaption className={styles.figcaption}>
            Figure from Anania et al.(AGE-PRO VIII) showing an example of the gas density evolution when external photoevaporation is 
            included (G₀=10) in the models (color lines) in comparison with only viscous evolution models (grey lines).
            </figcaption>

            <p className={styles.description}>
            &#10025; In Tabone et al. (AGE-PRO VII) the gas evolution of protoplanetary disks is modelled either using 
            viscous evolution or MHD wind-driven evolution as analytically implemented in 
            in <a href="https://ui.adsabs.harvard.edu/abs/2022MNRAS.512.2290T/abstract" className="underline">Tabone et al. (2022)</a>. 
            The viscous evolution models include photoevaporation from X-ray irradiation from the central star, 
            as explained 
            in <a href="https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.3611P/abstract" className="underline">Picogna et al. (2021)</a>. 
            For the population synthesis models, we use the Diskpop python package developed 
            by <a href="https://ui.adsabs.harvard.edu/abs/2024A%26A...689A.285S/abstract" className="underline">Somigliana et al. (2024)</a>. 
            To request access to the scripts use in Tabone et al. (AGE-PRO VII), please 
            contact <a href="mailto:benoit.tabone@cnrs.fr" className="underline">Dr. Benoî Tabone</a>.
            </p>

            <figure className={styles.disk_schematicContainer}>
                <Image src="/theory/Theory_4.png" alt="AGE-PRO VII Figure" fill className={styles.diskSchematicImage}></Image>
            </figure>
            <figcaption className={styles.figcaption}>
            Figures from Tabone et al. (AGE-PRO VII) comparing different disk observables to population synthesis MWD wind models (left) 
            to viscous plus internal photoevaporation models (right).
            </figcaption>


       </div>
    );
};

export default ScriptsPage;

import styles from "./data.module.css";

const DataHeader = () => {
    return (
        <div>
            <h1 className={styles.header}>AGE-PRO Measurements</h1>
            <div className={styles.line}></div>
            <p className={styles.paragraph}>
            We provide a detailed summary of stellar and disk properties for the full AGE-PRO sample, 
            including the gas disk masses and sizes derived from our ALMA observations. This resource 
            is intended to support comparative studies, model benchmarking, and follow-up work by the 
            broader community. 
            </p>
            <p className={styles.paragraph}>
            The table includes key stellar parameters (e.g., spectral type, luminosity, 
            accretion rate), molecular line and continuum fluxes, and gas and dust disk properties (e.g., 
            CO isotopologue and N₂H⁺-based gas mass estimates, gas disk radii from ¹²CO line emission).
            </p>
            <p className={styles.paragraph}>
            &rArr; Click <a href='https://docs.google.com/spreadsheets/d/1IBCEUJ4MxHFu8dko6FXIS22ImvWz16Xs8Ov2ZabJn3c/edit?usp=sharing' className="underline">here</a> to access the AGE-PRO sample table.
            (Please <strong>cite the original references listed in the table</strong> when using specific properties)
            </p>

            <p className={styles.paragraph}>   </p>

            <h1 className={styles.header}>AGE-PRO Data</h1>
            <div className={styles.line}></div>

            <p className={styles.paragraph}>
                As part of our program, we provide the following calibrated data products in ALMA Bands 6 and 7: 
            </p>
            <ul className={styles.datalist}>
                <li> Images, measurement sets (MS files), and radial profiles of continuum emission</li>
                <li> Image cubes (.fits format) of all lines targeted</li>
                <li> Moment zero maps (M0) and their uncertainty (dM0) for CO and its isotopologues</li>
                <li> Radial Profile of emission for CO isotopologues</li>
                <li> MS files of the ¹²CO line for all regions</li>
                <li> MS files of the C¹⁷O line for Ophiuchus</li>
                <li> MS files of the N₂H⁺ line for Lupus and Upper Sco</li>
            </ul>
            <div className={styles.ctaRow}>
                <a
                    href="https://ke-coco-zhang.github.io/agepro-website/"
                    className={styles.ctaButton}
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit the AGE-PRO Database
                </a>
            </div>
        </div>
    )
}

const DataPage = () => {
    return (
        <div className={styles.container}>
            <DataHeader />
        </div>
    );
};

export default DataPage;

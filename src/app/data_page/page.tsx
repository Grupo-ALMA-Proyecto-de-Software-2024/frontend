import styles from "./data.module.css";
import DataSearcher from "./components/data_searcher/DataSearcher"

const DataHeader = () => {
    return (
        <div>
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
            <p className={styles.paragraph}>
               To retrieve specific data, first select one or more regions and filter by your desired Disk,
               ALMA Band, Molecules of interest, and/or Data types. Finally, select your datasets of 
               interest and press <strong>DOWNLOAD</strong>. This creates a bash download script with your 
               selection, to be run from the command line.
            </p>
        </div>
    )
}

const DataPage = () => {
    return (
        <div className={styles.container}>
            <DataHeader />
            <DataSearcher />
        </div>
    );
};

export default DataPage;
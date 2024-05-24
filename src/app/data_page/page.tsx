import styles from "./data.module.css";
import DataSearcher from "./components/data_searcher/DataSearcher"

const DataHeader = () => {
    return (
        <div>
            <h1 className={styles.header}>Data</h1>
            <p className={styles.paragraph}>
                The datasets, images, models, and data products needed to reproduce the results of MAPS I - 
                XX are publicly available via the download presets below. In addition to these products, we provide: 
            </p>
            <ul className={styles.datalist}>
                <li>Self-calibrated measurement sets of all spectral windows covered by MAPS (see MAPS I)</li>
                <li>
                    Image cubes at three angular resolutions for the Band 3 lines (0”.3 and 0”.5 circularized beams, 
                    and Briggs robust=0.5 non-circularized), and three angular resolutions for the Band 6 lines 
                    (0”.15, 0”.2, and 0”.3 circularized, and robust=0.5 non-circularized), as well as the associated 
                    Keplerian CLEAN masks, CLEAN models, and python scripts. The 0.3” and robust=0.5 cubes are imaged 
                    both with and without continuum subtraction. All image cubes are delivered with and without primary 
                    beam correction, and with and without the so called JvM correction applied (Jorsater, S., & van Moorsel, 
                    G. A. 1995, AJ, 110, 2037) (see MAPS II)
                </li>
                <li>
                    Value added products for each line and spatial resolution: moment maps, rotational maps, 
                    peak intensity maps, and radial profiles (see MAPS III) 
                </li>
                <li>Emission surfaces for the strongest lines (see MAPS IV)</li>
                <li>Continuum images for the four spectral settings (see MAPS XIV)</li>
            </ul>
            <p className={styles.paragraph}>
                The interface below will allow you to directly search and select any of these products, in addition to the 
                available download presets. The download button will generate a bash shell script to download the files you 
                have selected. A bibtex file is also generated with all of the citations for the specific data that you have requested to download. 
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
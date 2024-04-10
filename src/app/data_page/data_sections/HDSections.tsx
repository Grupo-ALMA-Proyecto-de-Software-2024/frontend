import styles from "../data.module.css";

const HD_Images = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>HD_163296 - Images</h5>
            <div className={styles.buttonsSearcherColumns}>
                <div className={styles.buttonsSearcher}>
                    <button>13CO</button>
                    <button>HC15N</button>
                    <button>C17O</button>
                    <button>HCO+</button>
                    <button>N2D+</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>C18O</button>
                    <button>CN</button>
                    <button>HCN</button>
                    <button>c-C3H2</button>
                    <button>HC3N</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>C2H</button>
                    <button>CS</button>
                    <button>CO</button>
                    <button>CH3CN</button>
                    <button>H13CO+</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>13CN</button>
                    <button>H2CO</button>
                    <button>H13CN</button>
                    <button>DCN</button>
                </div>
            </div>
        </div>
    )
}

const HD_VADP = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>HD_163296 - VADP</h5>
            <div className={styles.buttonsSearcherColumns}>
                <div className={styles.buttonsSearcher}>
                    <button>H13CN</button>
                    <button>CO</button>
                    <button>13CN</button>
                    <button>CH3CN</button>
                    <button>H2CO</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>H13CO+</button>
                    <button>DCN</button>
                    <button>C17O</button>
                    <button>c-C3H2</button>
                    <button>13CO</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>CN</button>
                    <button>HC15N</button>
                    <button>C18O</button>
                    <button>HCO+</button>
                    <button>N2D+</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>HC3N</button>
                    <button>CS</button>
                    <button>C2H</button>
                    <button>HCN</button>
                </div>
            </div>
        </div>
    )
}

const HD_Measurement = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>HD_163296 - Measurement Sets</h5>
            <div className={styles.buttonsSearcherColumns}>
                <div className={styles.buttonsSearcher}>
                    <button>90GHz_setting_full_spws</button>
                    <button>110GHz_setting_full_spws</button>
                    <button>220GHz_setting_full_spws</button>
                    <button>260GHz_setting_full_spws</button>
                    <button>13CN</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>13CO</button>
                    <button>C17O</button>
                    <button>C18O</button>
                    <button>C2H</button>
                    <button>c-C3H2</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>CH3CN</button>
                    <button>CN</button>
                    <button>CO</button>
                    <button>CS</button>
                    <button>DCN</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>H13CN</button>
                    <button>H13CO+</button>
                    <button>H2CO</button>
                    <button>HC15N</button>
                    <button>HC3N</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>HCN</button>
                    <button>HCO+</button>
                    <button>N2D+</button>
                </div>
            </div>
        </div>
    )
}

export {HD_Images, HD_VADP, HD_Measurement};
import styles from "../data.module.css";

const MWC_Images = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>MWC_480 - Images</h5>
            <div className={styles.buttonsSearcherColumns}>
                <div className={styles.buttonsSearcher}>
                    <button>CN</button>
                    <button>C18O</button>
                    <button>N2D+</button>
                    <button>HCO+</button>
                    <button>C17O</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>13CO</button>
                    <button>c-C3H2</button>
                    <button>CS</button>
                    <button>C2H</button>
                    <button>HCN</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>HC15N</button>
                    <button>HC3N</button>
                    <button>13CN</button>
                    <button>H2CO</button>
                    <button>CO</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>H13CN</button>
                    <button>H13CO+</button>
                    <button>DCN</button>
                    <button>CH3CN</button>
                </div>
            </div>
        </div>
    )
}

const MWC_VADP = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>MWC_480 - VADP</h5>
            <div className={styles.buttonsSearcherColumns}>
                <div className={styles.buttonsSearcher}>
                    <button>H13CO+</button>
                    <button>HC15N</button>
                    <button>CO</button>
                    <button>HC3N</button>
                    <button>C18O</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>N2D+</button>
                    <button>HCO+</button>
                    <button>HCN</button>
                    <button>C17O</button>
                    <button>C2H</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>13CO</button>
                    <button>CH3CN</button>
                    <button>CN</button>
                    <button>H13CN</button>
                    <button>H2CO</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>13CN</button>
                    <button>c-C3H2</button>
                    <button>CS</button>
                    <button>DCN</button>
                </div>
            </div>
        </div>
    )
}

const MWC_Measurement = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>MWC_480 - Measurement Sets</h5>
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

export {MWC_Images, MWC_VADP, MWC_Measurement};
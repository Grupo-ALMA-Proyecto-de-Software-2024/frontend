import styles from "../data.module.css";

const GM_Images = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>GM_Aur - Images</h5>
            <div className={styles.buttonsSearcherColumns}>
                <div className={styles.buttonsSearcher}>
                    <button>C17O</button>
                    <button>H13CO+</button>
                    <button>13CO</button>
                    <button>HC15N</button>
                    <button>C18O</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>CS</button>
                    <button>N2D+</button>
                    <button>HCO+</button>
                    <button>C2H</button>
                    <button>HCN</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>HC3N</button>
                    <button>CN</button>
                    <button>CH3CN</button>
                    <button>13CN</button>
                    <button>H13CN</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>H2CO</button>
                    <button>DCN</button>
                    <button>c-C3H2</button>
                    <button>CO</button>
                </div>
            </div>
        </div>
    )
}

const GM_VADP = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>GM_Aur - VADP</h5>
            <div className={styles.buttonsSearcherColumns}>
                <div className={styles.buttonsSearcher}>
                    <button>HCN</button>
                    <button>CO</button>
                    <button>HC15N</button>
                    <button>C2H</button>
                    <button>H2CO</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>H13CO+</button>
                    <button>13CN</button>
                    <button>HC3N</button>
                    <button>c-C3H2</button>
                    <button>CS</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>C17O</button>
                    <button>DCN</button>
                    <button>CH3CN</button>
                    <button>13CO</button>
                    <button>C18O</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>H13CN</button>
                    <button>HCO+</button>
                    <button>N2D+</button>
                    <button>CN</button>
                </div>
            </div>
        </div>
    )
}

const GM_Measurement = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>GM_Aur - Measurement Sets</h5>
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

export {GM_Images, GM_VADP, GM_Measurement};
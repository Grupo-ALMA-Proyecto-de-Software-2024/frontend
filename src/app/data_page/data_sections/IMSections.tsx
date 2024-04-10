import styles from "../data.module.css";

const IM_Images = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>IM_Lup - Images</h5>
            <div className={styles.buttonsSearcherColumns}>
                <div className={styles.buttonsSearcher}>
                    <button>H13CO+</button>
                    <button>HC3N</button>
                    <button>CS</button>
                    <button>HCO+</button>
                    <button>N2D+</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>CH3CN</button>
                    <button>C2H</button>
                    <button>C18O</button>
                    <button>HCN</button>
                    <button>13CO</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>H13CN</button>
                    <button>CN</button>
                    <button>C17O</button>
                    <button>CO</button>
                    <button>DCN</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>HC15N</button>
                    <button>H2CO</button>
                    <button>13CN</button>
                    <button>c-C3H2</button>
                </div>
            </div>
        </div>
    )
}

const IM_VADP = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>IM_Lup - VADP</h5>
            <div className={styles.buttonsSearcherColumns}>
                <div className={styles.buttonsSearcher}>
                    <button>HC15N</button>
                    <button>13CO</button>
                    <button>C17O</button>
                    <button>N2D+</button>
                    <button>CS</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>HCO+</button>
                    <button>C18O</button>
                    <button>HC3N</button>
                    <button>CN</button>
                    <button>DCN</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>H13CO+</button>
                    <button>CH3CN</button>
                    <button>c-C3H2</button>
                    <button>H2CO</button>
                    <button>H13CN</button>
                </div>
                <div className={styles.buttonsSearcher}>
                    <button>13CN</button>
                    <button>CO</button>
                    <button>C2H</button>
                    <button>HCN</button>
                </div>
            </div>
        </div>
    )
}

const IM_Measurement = () => {
    return (
        <div className={styles.secondDataSearcher}>
            <h5>IM_Lup - Measurement Sets</h5>
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

export {IM_Images, IM_VADP, IM_Measurement};
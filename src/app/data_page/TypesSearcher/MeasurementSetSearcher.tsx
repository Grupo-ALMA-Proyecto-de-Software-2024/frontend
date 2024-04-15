import styles from "../data.module.css";

const MeasurementSetSearcher = () => {
    return (
        <form className={styles.dataSearcher}>
            <h4>Select type of Measurement Set: </h4>
            <div className={styles.dataSearcherRadio}>
                <span><input type="radio" id="90GHz" name="measurement" value="90GHz_setting_full_spws"></input></span>
                <label htmlFor="90GHz">90GHz_setting_full_spws</label>
                <span><input type="radio" id="110GHz" name="measurement" value="110GHz_setting_full_spws"></input></span>
                <label htmlFor="110GHz">110GHz_setting_full_spws</label>
                <span><input type="radio" id="220GHz" name="measurement" value="220GHz_setting_full_spws"></input></span>
                <label htmlFor="220GHz">220GHz_setting_full_spws</label>
                <span><input type="radio" id="260GHz" name="measurement" value="260GHz_setting_full_spws"></input></span>
                <label htmlFor="260GHz">260GHz_setting_full_spws</label>
                <span><input type="radio" id="13CN" name="measurement" value="13CN"></input></span>
                <label htmlFor="13CN">13CN</label>
                <span><input type="radio" id="13CO" name="measurement" value="13CO"></input></span>
                <label htmlFor="13CO">13CO</label>
                <span><input type="radio" id="C17O" name="measurement" value="C17O"></input></span>
                <label htmlFor="C17O">C17O</label>
                <span><input type="radio" id="C18O" name="measurement" value="C18O"></input></span>
                <label htmlFor="C18O">C18O</label>
                <span><input type="radio" id="C2H" name="measurement" value="C2H"></input></span>
                <label htmlFor="C2H">C2H</label>
                <span><input type="radio" id="c-C3H2" name="measurement" value="c-C3H2"></input></span>
                <label htmlFor="c-C3H2">c-C3H2</label>
            </div>
            <div className={styles.dataSearcherRadio}>
                <span><input type="radio" id="CH3CN" name="measurement" value="CH3CN"></input></span>
                <label htmlFor="CH3CN">CH3CN</label>
                <span><input type="radio" id="CN" name="measurement" value="CN"></input></span>
                <label htmlFor="CN">CN</label>
                <span><input type="radio" id="CO" name="measurement" value="CO"></input></span>
                <label htmlFor="CO">CO</label>
                <span><input type="radio" id="CS" name="measurement" value="CS"></input></span>
                <label htmlFor="CS">CS</label>
                <span><input type="radio" id="DCN" name="measurement" value="DCN"></input></span>
                <label htmlFor="DCN">DCN</label>
                <span><input type="radio" id="H13CN" name="measurement" value="H13CN"></input></span>
                <label htmlFor="H13CN">H13CN</label>
                <span><input type="radio" id="H13CO+" name="measurement" value="H13CO+"></input></span>
                <label htmlFor="H13CO+">H13CO+</label>
                <span><input type="radio" id="H2CO" name="measurement" value="H2CO"></input></span>
                <label htmlFor="H2CO">H2CO</label>
                <span><input type="radio" id="HC15N" name="measurement" value="HC15N"></input></span>
                <label htmlFor="HC15N">HC15N</label>
                <span><input type="radio" id="HC3N" name="measurement" value="HC3N"></input></span>
                <label htmlFor="HC3N">HC3N</label>
                <span><input type="radio" id="HCN" name="measurement" value="HCN"></input></span>
                <label htmlFor="HCN">HCN</label>
                <span><input type="radio" id="HCO+" name="measurement" value="HCO+"></input></span>
                <label htmlFor="HCO+">HCO+</label>
                <span><input type="radio" id="N2D+" name="measurement" value="N2D+"></input></span>
                <label htmlFor="N2D+">N2D+</label>
            </div>
        </form>
    )
} 

export default MeasurementSetSearcher;
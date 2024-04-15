import styles from "../data.module.css";

const VADPSearcher = () => {
    return (
        <form className={styles.dataSearcher}>
            <h4>Select type of VADP: </h4>
            <div className={styles.dataSearcherRadio}>
                <span><input type="radio" id="H2CO" name="vadp" value="H2CO"></input></span>
                <label htmlFor="H2CO">H2CO</label>
                <span><input type="radio" id="13CN" name="vadp" value="13CN"></input></span>
                <label htmlFor="13CN">13CN</label>
                <span><input type="radio" id="HCN" name="vadp" value="HCN"></input></span>
                <label htmlFor="HCN">HCN</label>
                <span><input type="radio" id="HC15N" name="vadp" value="HC15N"></input></span>
                <label htmlFor="HC15N">HC15N</label>
                <span><input type="radio" id="C2H" name="vadp" value="C2H"></input></span>
                <label htmlFor="C2H">C2H</label>
                <span><input type="radio" id="c-C3H2" name="vadp" value="c-C3H2"></input></span>
                <label htmlFor="c-C3H2">c-C3H2</label>
                <span><input type="radio" id="CO" name="vadp" value="CO"></input></span>
                <label htmlFor="CO">CO</label>
                <span><input type="radio" id="C18O" name="vadp" value="C18O"></input></span>
                <label htmlFor="C18O">C18O</label>
                <span><input type="radio" id="H13CO+" name="vadp" value="H13CO+"></input></span>
                <label htmlFor="H13CO+">H13CO+</label>
                <span><input type="radio" id="N2D+" name="vadp" value="N2D+"></input></span>
                <label htmlFor="N2D+">N2D+</label>
            </div>
            <div className={styles.dataSearcherRadio}>
                <span><input type="radio" id="HCO+" name="vadp" value="HCO+"></input></span>
                <label htmlFor="HCO+">HCO+</label>
                <span><input type="radio" id="DCN" name="vadp" value="DCN"></input></span>
                <label htmlFor="DCN">DCN</label>
                <span><input type="radio" id="CH3CN" name="vadp" value="CH3CN"></input></span>
                <label htmlFor="CH3CN">CH3CN</label>
                <span><input type="radio" id="C17O" name="vadp" value="C17O"></input></span>
                <label htmlFor="C17O">C17O</label>
                <span><input type="radio" id="H13CN" name="vadp" value="H13CN"></input></span>
                <label htmlFor="H13CN">H13CN</label>
                <span><input type="radio" id="CS" name="vadp" value="CS"></input></span>
                <label htmlFor="CS">CS</label>
                <span><input type="radio" id="13CO" name="vadp" value="13CO"></input></span>
                <label htmlFor="13CO">13CO</label>
                <span><input type="radio" id="CN" name="vadp" value="CN"></input></span>
                <label htmlFor="CN">CN</label>
                <span><input type="radio" id="HC3N" name="vadp" value="HC3N"></input></span>
                <label htmlFor="HC3N">HC3N</label>
            </div>
        </form>
    )
} 

export default VADPSearcher;
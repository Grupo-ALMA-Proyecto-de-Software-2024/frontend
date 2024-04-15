import styles from "../data.module.css";

const SixGroupSearcher = () => {
    return (
        <form className={styles.dataSearcher}>
            <h4>Select type of map: </h4>
            <div className={styles.dataSearcherRadio}>
                <span><input type="radio" id="0.3arcsec_wcont" name="six" value="0.3arcsec_wcont"></input></span>
                <label htmlFor="0.3arcsec_wcont">0.3arcsec_wcont</label>
                <span><input type="radio" id="robust_0.5_wcont" name="six" value="robust_0.5_wcont"></input></span>
                <label htmlFor="robust_0.5_wcont">robust_0.5_wcont</label>
                <span><input type="radio" id="0.15arcsec" name="six" value="0.15arcsec"></input></span>
                <label htmlFor="0.15arcsec">0.15arcsec</label>
                <span><input type="radio" id="robust_0.5" name="six" value="robust_0.5"></input></span>
                <label htmlFor="robust_0.5">robust_0.5</label>
                <span><input type="radio" id="0.2arcsec" name="six" value="0.2arcsec"></input></span>
                <label htmlFor="0.2arcsec">0.2arcsec</label>
                <span><input type="radio" id="0.3arcsec" name="six" value="0.3arcsec"></input></span>
                <label htmlFor="0.3arcsec">0.3arcsec</label>
            </div>
        </form>
    )
} 

export default SixGroupSearcher;
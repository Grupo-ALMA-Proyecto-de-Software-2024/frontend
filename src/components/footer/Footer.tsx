import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Age-PRO</div>
            <div className={styles.text}>
                Age-PRO Large Program from ALMA © All Rights Are Reserved.
            </div>
        </div>
    );
};

export default Footer;
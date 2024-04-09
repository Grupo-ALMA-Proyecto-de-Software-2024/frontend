import Link from "next/link";
import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" passHref className={styles.logo}>
                <Image src="/logos/logo.png" alt="" fill sizes="(max-width: 100px) 100vw, 100px" className={styles.logoImage}></Image>
            </Link>
            <div className={styles.linksContainer}>
                <Links />
            </div>
        </div>
    );
};

export default Navbar;
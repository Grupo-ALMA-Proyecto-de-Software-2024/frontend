import Link from "next/link";
import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" passHref className={styles.logo}>
                <Image src="/logo2.png" alt="" fill sizes="(max-width: 100px) 100vw, 100px" className={styles.logoImage}></Image>
            </Link>
            <div>
                <Links />
            </div>
        </div>
    );
};

export default Navbar;

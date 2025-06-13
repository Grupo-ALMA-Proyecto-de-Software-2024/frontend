"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

/* MUI ICONS */
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
interface LinkItem {
    title: string;
    path: string;
}

const links: LinkItem[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Motivation",
        path: "/overview",
    },
    {
        title: "Theory",
        path: "/scripts_page"
    },
    {
        title: "Targets",
        path: "/regions",
    },
    {
        title: "Publications",
        path: "/publications",
    },
    {
        title: "Team",
        path: "/team",
    },
    {
        title: "Press",
        path: "/press",
    },
    {
        title: "AGE-PRO Data",
        path: "/data_page",
    },
];

const Links = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>
                {open ? <CloseRoundedIcon className={styles.menuIcon} /> : <MenuRoundedIcon className={styles.menuIcon} />}
            </button>
            <div className={`${styles.mobileLinks} ${open ? styles.open : ''}`}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
            </div>
        </div>
    );
};

export default Links;

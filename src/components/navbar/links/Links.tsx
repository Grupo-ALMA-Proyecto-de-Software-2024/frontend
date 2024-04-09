"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink"; // Asegúrate de que la ruta es correcta.

// Definimos el tipo para los objetos link.
interface LinkItem {
    title: string;
    path: string;
}

const links: LinkItem[] = [
    {
        title: "HomePage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Data",
        path: "/data_page",
    },
    {
        title: "Scripts",
        path: "/scripts_page",
    },
];

const Links = () => {
    const [open, setOpen] = useState(false);

    /*Temporary, just use it to show/hide Admin button and Login/logut button */
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session ? (
                    <>
                        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <button className={styles.logout}>Log out</button>
                    </>
                ) : (
                    <NavLink item={{ title: "Sign in", path: "/login" }} /> /*This si temporary, just change it if u want*/
                )}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;

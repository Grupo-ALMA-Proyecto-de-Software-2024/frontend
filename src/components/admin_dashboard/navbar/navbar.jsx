import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Admin Dashboard</div>
            <button className={styles.logout}>Logout</button>
        </nav>
    );
};

export default Navbar;

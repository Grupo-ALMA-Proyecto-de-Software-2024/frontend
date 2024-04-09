import React from 'react';
import Navbar from '../../components/admin/navbar/navbar';
import Sidebar from '../../components/admin/sidebar/sidebar';
import styles from '../../components/admin/dashboard.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default Layout;

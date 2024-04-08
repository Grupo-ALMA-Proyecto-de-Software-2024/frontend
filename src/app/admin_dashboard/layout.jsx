import React from 'react';
import Navbar from '../../components/admin_dashboard/navbar/navbar';
import Sidebar from '../../components/admin_dashboard/sidebar/sidebar';
import styles from '../../components/admin_dashboard/dashboard.module.css';

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

import React from 'react';
import styles from './sidebar.module.css';
import Image from 'next/image';

import { FaDatabase, FaUserPlus, FaEdit } from 'react-icons/fa';

const sidebarItems = [
    {
        label: 'Data Entry',
        link: '/admin/entries',
        icon: <FaDatabase />,
    },
    {
        label: 'Users',
        link: '/admin/users',
        icon: <FaUserPlus />,
    },
    {
        label: 'Edit Entries',
        link: '/admin/edit-entries',
        icon: <FaEdit />,
    },
];

import SidebarLink from './sidebarLink/sidebarLink';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.user}>
                <Image src="/logos/logo2.png" alt="User Avatar" width={50} height={50} />
                <div className={styles.userDetail}>
                    <p className={styles.name}>Name: John Doe</p>
                    <p className={styles.occupation}>Occupation: Admin</p>
                </div>
            </div>
            <ul className={styles.sidebarList}>
                {sidebarItems.map((item, index) => (
                    <SidebarLink key={index} label={item.label} link={item.link} icon={item.icon} className={styles.sidebarItem} />
                ))}
            </ul>
        </aside>
    );
};
export default Sidebar;

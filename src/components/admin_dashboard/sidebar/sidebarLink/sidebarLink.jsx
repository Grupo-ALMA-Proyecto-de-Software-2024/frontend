"use client"
import Link from 'next/link';
import styles from './sidebarLink.module.css';
import { usePathname } from 'next/navigation';

const SidebarLink = ({ label, link, icon }) => {

    const pathname = usePathname()
    return (
        <li>
            <Link href={link} className={`${styles.container} ${pathname === link && styles.active}`}>
                {icon}
                {label}
            </Link>
        </li>
    );
};
export default SidebarLink;

import React from 'react';
import Search from '../search/search';
import Link from 'next/link';
import styles from './entries.module.css';
import Image from 'next/image';
import Pagination from '../pagination/pagination';

const EntriesPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for an entry" />
                <Link href="/admin/entries/add">
                    <button className={styles.button}>Add Entry</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Entry</th>
                        <th>Description</th>
                        <th>Created at</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image className={styles.userImage} src="/cards/visualizationsIcon.png" alt="User Avatar" width={35} height={35} />
                                <span>OBS-01</span>
                            </div>
                        </td>
                        <td>First observations; lorem ipsum...</td>
                        <td>2022-01-01</td>
                        <td>Observation</td>
                        <td>John Doe</td>
                        <td>
                            <div className={styles.buttons_container}>
                                <Link href="/admin/entries/edit">
                                    <button className={`${styles.button} ${styles.edit}`}>
                                        Edit
                                    </button>
                                </Link>
                                <Link href="/admin/entries/delete">
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
);

};

export default EntriesPage;


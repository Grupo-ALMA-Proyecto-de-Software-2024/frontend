import React from 'react';
import Search from '../search/search';
import Link from 'next/link';
import styles from './users.module.css';
import Image from 'next/image';
import Pagination from '../pagination/pagination';

const UsersPage = () => {
    return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <Search placeholder="Search for users" />
                    <Link href="/admin/users/add-user">
                        <button className={styles.button}>Add User</button>
                    </Link>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Created at</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <Image className={styles.userImage} src="/avatar.png" alt="User Avatar" width={35} height={35} />
                                    <span>John Doe</span>
                                </div>
                            </td>
                            <td>johndoe@example.com</td>
                            <td>2022-01-01</td>
                            <td>Admin</td>
                            <td>Active</td>
                            <td>
                                <div className={styles.buttons_container}>
                                    <Link href="/admin/users/edit-user">
                                        <button className={`${styles.button} ${styles.edit}`}>
                                            Edit
                                        </button>
                                    </Link>
                                    <Link href="/admin/users/delete-user">
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

export default UsersPage;

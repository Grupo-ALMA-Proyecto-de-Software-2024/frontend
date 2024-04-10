import React from 'react';
import styles from './pagination.module.css';

const Pagination = () => {
    return (
        <div className={styles.container}>
            <button className={styles.paginationButton} disabled>Prev</button>
            <button className={styles.paginationButton} >Next</button>
        </div>
    );
};

export default Pagination;

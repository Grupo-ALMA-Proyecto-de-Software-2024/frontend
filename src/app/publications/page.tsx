// pages/index.tsx

import type { NextPage } from 'next';
import Publication from './components/Publication';
import publicationsData from './data/publications';
import styles from './components/page.module.css';
import { Divider } from 'antd';
import React from 'react';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Publications</h1>
      <Divider />
      <p className={styles.paragraph}>
        A list of publications that have been produced using the data from the
        Age-PRO project. 
        
        For any questions, please contact the authors of the respective
        publication.
      </p>
      <div className={styles.publcationContainer}>
        {publicationsData.map((publication, index) => (
          <React.Fragment key={index}>
            <Publication publication={publication} />
            {index < publicationsData.length - 1 && <Divider />}
          </React.Fragment>
        ))} 
      </div>
    </div>
  );
};

export default Home;

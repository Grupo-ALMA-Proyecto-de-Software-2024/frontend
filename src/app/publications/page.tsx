// src/app/publications/page.tsx

"use client";

import type { NextPage } from 'next';
import Publication from './components/Publication';
import { fetchPublications } from './data/publications';
import styles from './components/page.module.css';
import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { PublicationDto } from '@/api/dto';



const PublicationsPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fetchedPublications, setFetchedPublications] = useState<PublicationDto[]>([]);

  useEffect(() => {
    const loadPublications = async () => {
      try {
        const publications = await fetchPublications();
        setFetchedPublications(publications);
        setIsLoading(false);  // Set isLoading to false after fetching
      } catch (err: any) {
        setError(err.message || 'Error in fetching publications');
        setIsLoading(false);  // Set isLoading to false even if there's an error
      }
    };
    loadPublications();
  }, []);

  useEffect(() => {
  }, [fetchedPublications]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Publications</h1>
      <Divider />
      <p className={styles.paragraph}>
        A list of publications that have been produced using the data from the Age-PRO project. 
        
        For any questions, please contact the authors of the respective publication.
      </p>
      <div>
        {isLoading ? (
          <div className={styles.loading}>
            <Divider />
            Loading...
          </div>
        ) : error ? (
          <div>
            <Divider />            
            <strong>Error:</strong> {error}
          </div>
        ) : (
            fetchedPublications.map((publication, index) => (
              <React.Fragment key={index}>
                <Publication {...publication} />
                {index < fetchedPublications.length - 1 && <Divider />}
              </React.Fragment>
            ))
        )}
      </div>
    </div>
  );
};

export default PublicationsPage;

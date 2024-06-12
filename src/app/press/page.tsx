"use client";

import type { Metadata } from "next";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './press.module.css';
import { fetchPressNews } from './data/press';
import { NewsType, PressNewsDto } from '@/api/dto';


const Press = () => {
    const [pressReleases, setPressReleases] = useState<PressNewsDto[]>([]);
    const [newsArticles, setNewsArticles] = useState<PressNewsDto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pressNews: PressNewsDto[] = await fetchPressNews();
                const releases = pressNews
                    .filter(news => news.newsType === NewsType.OFFICIAL_PRESS);
                const articles = pressNews
                    .filter(news => news.newsType === NewsType.AGEPRO_IN_NEWS);
                setPressReleases(releases);
                setNewsArticles(articles);
            } catch (error) {
                console.error('Failed to fetch press news', error);
            }
        };

        fetchData();
    }, []);

    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Press</h1>
        <p className={styles.description}>
          The MAPS project has been covered extensively in the international press. See below for a collection of these articles.
        </p>
  
        <section>
          <h2 className={styles.subHeader}>Official Press Releases</h2>
          <div className={styles.pressContainer}>
            <div className={styles.pressList}>
              <ul>
                {pressReleases.map((release, index) => (
                  <li key={index}>
                    {release.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.pressImage}>
              <Image src="/Protoplanetary_disk.jpg" alt="Press Releases" width={550} height={300} />
              <p className={styles.imageDescription}>
                Proto-planetary disks are the birthplaces of planets. They are made up of gas and dust that surround young stars. 
                These disks are the remnants of the star formation process and are where planets form. 
                The study of proto-planetary disks is crucial to understanding the formation and evolution of planetary systems.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className={styles.subHeader}>AGE-PRO in the News</h2>
          <div className={styles.newsArticles}>
            <div className={styles.pressList}>
              <ul>
               {newsArticles.map((release, index) => (
                  <li key={index}>
                    {release.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2 className={styles.subHeader}>Contact Us</h2>
          <div className={styles.contactUs}>
            <p className={styles.contactDescription}>
              For any inquiries or further information, please contact us at agepro@alma.edu.
            </p>
          </div>
        </section>
  
      </div>
    );
};

export default Press;

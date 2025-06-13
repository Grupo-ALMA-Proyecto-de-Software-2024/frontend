"use client";

import type { Metadata } from "next";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './press.module.css';
import { fetchPressNews } from './data/press';
import { NewsType, PressNewsDto } from '@/api/dto';
import { marked } from 'marked';

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
        <h1 className={styles.header}>Press coverage</h1>
        <div className={styles.line}></div>

        <p className={styles.description}>
          The results from AGE-PRO being covered in the press can be found here.
        </p>
  
        <section>
          <h2 className={styles.subHeader}>Official Press Releases</h2>
          <div className={styles.pressContainer}>
            <div className={styles.pressList}>
              <ul>
                {pressReleases.map((release, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: marked(release.content) }} />
                ))}
              </ul>
            </div>
            <div className={styles.pressImage}>
              <Image src="/ALMA Age Pro Protoplanetary Disk 2025.png" alt="Press Releases" width={397} height={300} />
              <p className={styles.imageDescription}>
                Artist illustration of a protoplanetary disk, like the thirty studied for the ALMA AGE-PRO survey. 
                The lifetime of the gas within the disk determines the timescale for planetary growth. Image credit: NSF/AUI/NSF NRAO/S.Dagnello. 
              </p>
            </div>
          </div>
        </section>
        {/* <section>
          <h2 className={styles.subHeader}>AGE-PRO in the News</h2>
          <div className={styles.newsArticles}>
            <div className={styles.pressList}>
                <ul>
                    {newsArticles.map((release, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: marked(release.content) }} />
                    ))}
                </ul>
            </div>
          </div>
        </section> */}
        <section>
          <h2 className={styles.subHeader}>Contact Us</h2>
          <div className={styles.contactUs}>
            <p className={styles.contactDescription}>
              For any inquiries or further information, please contact our <a href="/team" className="underline">team members</a>.
            </p>
          </div>
        </section>
  
      </div>
    );
};

export default Press;

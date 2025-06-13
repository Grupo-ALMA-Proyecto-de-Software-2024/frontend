"use client";
import type { NextPage } from 'next';
import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { RegionDto, DiskDto } from '@/api/dto';
import almaClient from "@/api/client";
import styles from './regions.module.css'; // Importa el archivo CSS module

const fetchRegions = async (): Promise<RegionDto[]> => {
    try {
        const regions = await almaClient.getRegions();
        return regions;
    } catch (error: any) {
        console.error('Failed to fetch regions', error);
        throw new Error(error.message);
    }
};

const fetchDisks = async (): Promise<DiskDto[]> => {
    try {
        const disks = await almaClient.getDisks();
        return disks;
    } catch (error: any) {
        console.error('Failed to fetch disks', error);
        throw new Error(error.message);
    }
};

const RegionsPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fetchedRegions, setFetchedRegions] = useState<RegionDto[]>([]);
  const [fetchedDisks, setFetchedDisks] = useState<DiskDto[]>([]);

  useEffect(() => {
      const loadRegions = async () => {
          try {
              const regions = await fetchRegions();
              const disks = await fetchDisks();
              setFetchedRegions(regions);
              setFetchedDisks(disks);
              setIsLoading(false);
          } catch (err: any) {
              setError(err.message || 'Error in fetching regions');
              setIsLoading(false);
          }
      };
      loadRegions();
  }, []);

  const getAllFeatures = () => {
      const allFeatures: Set<string> = new Set();
      fetchedDisks.forEach(disk => {
        Object.keys(disk.features).forEach(key => {
            if (key !== 'Fullname') { // Excluimos ID y fullname
                allFeatures.add(key);
            }
        });
    });
      return Array.from(allFeatures);
  };

  return (
      <div className={styles.container}>
          <h1 className={styles.title}>Disks Targeted on Each Region</h1>
          <Divider />
          {isLoading ? (
              <div className={styles.loading}>Loading...</div>
          ) : error ? (
              <div className={styles.error}>{error}</div>
          ) : (
              fetchedRegions.map((region, regionIndex) => (
                  <div key={regionIndex} className={styles.region}>
                      <div className={styles.regionContent}>
                          <div className={styles.regionDescription}>
                              <h2>{region.name}</h2>
                              {region.description && <p className={styles.description}>{region.description}</p>}
                          </div>
                          <div className={styles.regionImage}>
                              <img src={`/regions/${region.name}.jpg`} alt={region.name} className={styles.image} />
                          </div>
                      </div>
                      <div className={styles.tableWrapper}>
                          <table className={styles.table}>
                              <thead>
                                  <tr>
                                      <th className={styles.th}>AGE-PRO ID</th> {/* Columna para Disk Name */}
                                      {getAllFeatures().map((feature, index) => (
                                          <th key={index} className={styles.th}>{feature}</th>
                                      ))}
                                  </tr>
                              </thead>
                              <tbody>
                                  {region.disks
                                      .slice() // Clonamos el array para no modificar el original
                                      .sort((a, b) => {
                                          // Ordenamos por el campo 'Disk ID' como string
                                          if (a.features['Disk ID'] < b.features['Disk ID']) return -1;
                                          if (a.features['Disk ID'] > b.features['Disk ID']) return 1;
                                          return 0;
                                      })
                                      .map((disk, diskIndex) => (
                                          <tr key={diskIndex} className={diskIndex % 2 === 0 ? styles.evenRow : ''}>
                                              <td className={styles.td}>{disk.name}</td> {/* Renderizar el nombre del disco */}
                                              {getAllFeatures().map((feature, index) => (
                                                  <td key={index} className={styles.td}>{disk.features[feature] || '-'}</td>
                                              ))}
                                          </tr>
                                      ))}
                              </tbody>
                          </table>
                      </div>
                  </div>
              ))
          )}
      </div>
  );
};

export default RegionsPage;

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
}



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

  console.log("REGIONES");
  console.log(fetchedRegions);
  console.log("DISCOS");
  console.log(fetchedDisks);
  
  // columns it's union of all keys (example of json: fetchedRDisks[0].features)
  // code in python example: set((*(disk.features.keys() for disk in fetchedDisks))
  const columns: string[] = [];
  fetchedDisks.forEach(disk => {
    Object.keys(disk.features).forEach(key => {
      if (!columns.includes(key)) {
        columns.push(key);
      }
    });
  });

  console.log("COLUMNS");
  console.log(columns);

  const renderRegion = (region: RegionDto, regionName: string) => (
    <div key={regionName}>
      <h2>{regionName}</h2>
      <p>{region.info}</p>
      <img src={region.image} alt={`${regionName} image`} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fullname</th>
            <th>RA</th>
            <th>Dec</th>
            <th>Distance</th>
            <th>SpT</th>
            <th>Class</th>
            <th>Teff</th>
            <th>Lstar</th>
            <th>Av</th>
            <th>Mstar</th>
            <th>Macc</th>
          </tr>
        </thead>
        <tbody>
          {region.table.map((row, index) => (
            <tr key={index}>
              <td>{row.ID}</td>
              <td>{row.fullname}</td>
              <td>{row.RA}</td>
              <td>{row.Dec}</td>
              <td>{row.distance}</td>
              <td>{row.SpT}</td>
              <td>{row.Class}</td>
              <td>{row.Teff}</td>
              <td>{row.Lstar}</td>
              <td>{row.Av}</td>
              <td>{row.Mstar}</td>
              <td>{row.Macc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Divider />
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Regions</h1>
      <Divider />
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
          fetchedRegions && (
            <div>
              {renderRegion(fetchedRegions.Ophiuchus, 'Ophiuchus')}
              {renderRegion(fetchedRegions.Lupus, 'Lupus')}
              {renderRegion(fetchedRegions.UpperScorpius, 'Upper Scorpius')}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RegionsPage;

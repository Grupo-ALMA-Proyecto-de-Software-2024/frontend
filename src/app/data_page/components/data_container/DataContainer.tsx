"use client";
import React, { useState, useEffect } from 'react';
import styles from "./dataContainer.module.css";
import FilterListIcon from '@mui/icons-material/FilterList';

// Tipos de datos
interface DataItem {
  name: string;
  creationDate: string;
  file: string;
  isViewable: boolean;
}

interface Molecule {
  name: string;
  data: DataItem[];
}

interface Band {
  name: string;
  molecules: Molecule[];
}

interface Disk {
  id: string;
  disk: string;
  bands: Band[];
}

// Datos de ejemplo ampliados
const dummyData: Disk[] = [
  {
    id: '1',
    disk: 'Disk 1',
    bands: [
      {
        name: 'Band 6',
        molecules: [
          {
            name: 'Continuum',
            data: [
              { name: 'Measurement Set', creationDate: '2024-04-16', file: 'measurement_set.zip', isViewable: false },
              { name: 'Map', creationDate: '2024-04-17', file: 'map.fits', isViewable: true },
            ],
          },
          {
            name: 'Molecule 1',
            data: [
              { name: 'Measurement Set', creationDate: '2024-04-16', file: 'measurement_set.zip', isViewable: false },
              { name: 'Cubo de Canales', creationDate: '2024-04-17', file: 'cubo_de_canales.zip', isViewable: false },
              { name: 'Momento 0', creationDate: '2024-04-18', file: 'momento_0.fits', isViewable: true },
              { name: 'Momento 1', creationDate: '2024-04-19', file: 'momento_1.fits', isViewable: true },
            ],
          },
          {
            name: 'Molecule 2',
            data: [
              { name: 'Measurement Set', creationDate: '2024-04-16', file: 'measurement_set.zip', isViewable: false },
              { name: 'Cubo de Canales', creationDate: '2024-04-17', file: 'cubo_de_canales.zip', isViewable: false },
              { name: 'Momento 0', creationDate: '2024-04-18', file: 'momento_0.fits', isViewable: true },
              { name: 'Momento 1', creationDate: '2024-04-19', file: 'momento_1.fits', isViewable: true },
            ],
          },
          {
            name: 'Molecule N',
            data: [
              { name: 'Measurement Set', creationDate: '2024-04-16', file: 'measurement_set.zip', isViewable: false },
              { name: 'Cubo de Canales', creationDate: '2024-04-17', file: 'cubo_de_canales.zip', isViewable: false },
              { name: 'Momento 0', creationDate: '2024-04-18', file: 'momento_0.fits', isViewable: true },
              { name: 'Momento 1', creationDate: '2024-04-19', file: 'momento_1.fits', isViewable: true },
            ],
          },
        ],
      },
      {
        name: 'Band 7',
        molecules: [
          {
            name: 'Continuum',
            data: [
              { name: 'Measurement Set', creationDate: '2024-04-16', file: 'measurement_set.zip', isViewable: false },
              { name: 'Map', creationDate: '2024-04-17', file: 'map.fits', isViewable: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    disk: 'Disk N',
    bands: [
      {
        name: 'Band 1',
        molecules: [
          {
            name: 'Continuum',
            data: [
              { name: 'Measurement Set', creationDate: '2024-04-16', file: 'measurement_set.zip', isViewable: false },
              { name: 'Map', creationDate: '2024-04-17', file: 'map.fits', isViewable: true },
            ],
          },
        ],
      },
    ],
  },
];

const DataContainer: React.FC = () => {
  const [selectedBands, setSelectedBands] = useState<{ [key: string]: string | null }>({});
  const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: string | null }>({});
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: '', direction: 'asc' });

  const handleBandClick = (diskId: string, bandName: string) => {
    setSelectedBands((prev) => ({
      ...prev,
      [diskId]: prev[diskId] === bandName ? null : bandName,
    }));
    setSelectedCategories((prev) => ({
      ...prev,
      [diskId]: null,
    }));
  };

  const handleCategoryClick = (diskId: string, categoryName: string) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [diskId]: prev[diskId] === categoryName ? null : categoryName,
    }));
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    if (sortConfig.key !== key) {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = <T extends Record<string, any>>(data: T[], key: string, direction: 'asc' | 'desc'): T[] => {
    if (!key) return data;
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div
          className={`${styles.headerCell} ${sortConfig.key === 'disk' ? (sortConfig.direction === 'asc' ? styles.sortAsc : styles.sortDesc) : ''}`}
          onClick={() => handleSort('disk')}
        >
          Disk
          <FilterListIcon className={`${sortConfig.key === 'disk' ? styles.rotate : ''} ${styles.icon}`} />
        </div>
        <div
          className={`${styles.headerCell} ${sortConfig.key === 'band' ? (sortConfig.direction === 'asc' ? styles.sortAsc : styles.sortDesc) : ''}`}
          onClick={() => handleSort('band')}
        >
          Band
          <FilterListIcon className={`${sortConfig.key === 'band' ? styles.rotate : ''} ${styles.icon}`} />
        </div>
        <div
          className={`${styles.headerCell} ${sortConfig.key === 'molecule' ? (sortConfig.direction === 'asc' ? styles.sortAsc : styles.sortDesc) : ''}`}
          onClick={() => handleSort('molecule')}
        >
          Molecule
          <FilterListIcon className={`${sortConfig.key === 'molecule' ? styles.rotate : ''} ${styles.icon}`} />
        </div>
        <div
          className={`${styles.headerCell} ${sortConfig.key === 'data' ? (sortConfig.direction === 'asc' ? styles.sortAsc : styles.sortDesc) : ''}`}
          onClick={() => handleSort('data')}
        >
          Data Item
          <div className={styles.icon}>
            <FilterListIcon className={`${sortConfig.key === 'data' ? styles.rotate : ''}`} />
          </div>
        </div>
      </div>
      {sortedData(dummyData, sortConfig.key, sortConfig.direction).map((disk) => (
        <div className={styles.tableExt} key={disk.id}>
          <div className={styles.tableInt}>
            <div className={styles.diskColumn}>
              <div className={styles.eachDisk}>{disk.disk}</div>
            </div>
            <div className={styles.bandColumn}>
              {sortedData(disk.bands, sortConfig.key === 'band' ? 'name' : '', sortConfig.direction).map((band) => (
                <div
                  key={band.name}
                  onClick={() => handleBandClick(disk.id, band.name)}
                  className={styles.eachBand}
                >
                  {band.name}
                </div>
              ))}
            </div>
            <div className={styles.spectroscopyColumn}>
              {selectedBands[disk.id] &&
                sortedData(disk.bands.find((b) => b.name === selectedBands[disk.id])?.molecules || [], sortConfig.key === 'molecule' ? 'name' : '', sortConfig.direction).map((molecule) => (
                  <div
                    key={molecule.name}
                    onClick={() => handleCategoryClick(disk.id, molecule.name)}
                    className={styles.eachMolecule}
                  >
                    {molecule.name}
                  </div>
                ))}
            </div>
            <div className={styles.dataColumn}>
              {selectedCategories[disk.id] &&
                sortedData(disk.bands.find((b) => b.name === selectedBands[disk.id])?.molecules.find((m) => m.name === selectedCategories[disk.id])?.data || [], sortConfig.key === 'data' ? 'name' : '', sortConfig.direction).map((dataItem) => (
                  <div key={dataItem.name}>{dataItem.name}</div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataContainer;
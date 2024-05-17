"use client";
import React, { useState, useEffect } from 'react';
import styles from "./dataContainer.module.css";

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

  // Uso de useEffect para depuración
  useEffect(() => {
    console.log('selectedBands:', selectedBands);
    console.log('selectedCategories:', selectedCategories);
  }, [selectedBands, selectedCategories]);

  return (
    <div className={styles.tableContainer}>
      {dummyData.map((disk) => (
        <div className={styles.tableExt} key={disk.id}>
          <div className={styles.tableInt}>
            <div className={styles.diskColumn}>
              <div className={styles.eachDisk}>{disk.disk}</div>
            </div>
            <div className={styles.bandColumn}>
              {disk.bands.map((band) => (
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
                disk.bands
                  .find((b) => b.name === selectedBands[disk.id])
                  ?.molecules.map((molecule) => (
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
                disk.bands
                  .find((b) => b.name === selectedBands[disk.id])
                  ?.molecules.find((m) => m.name === selectedCategories[disk.id])
                  ?.data.map((dataItem) => (
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
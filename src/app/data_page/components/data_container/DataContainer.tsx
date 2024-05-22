"use client";
import React, { useState } from 'react';
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
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: '', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  const paginatedData = <T,>(data: T[], currentPage: number, itemsPerPage: number): T[] => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleSelectAll = () => {
    const allItems = new Set(dummyData.flatMap(disk =>
      disk.bands.flatMap(band =>
        band.molecules.flatMap(molecule =>
          molecule.data.map(dataItem => `${disk.id}-${band.name}-${molecule.name}-${dataItem.name}`)
        )
      )
    ));
    setSelectedItems(selectedItems.size === allItems.size ? new Set() : allItems);
  };

  const handleSelectItem = (itemKey: string) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(itemKey)) {
      newSelectedItems.delete(itemKey);
    } else {
      newSelectedItems.add(itemKey);
    }
    setSelectedItems(newSelectedItems);
  };

  const renderRows = () => {
    const rows: React.ReactNode[] = [];

    paginatedData(sortedData(dummyData, sortConfig.key, sortConfig.direction), currentPage, itemsPerPage).forEach(disk => {
      let diskRowCount = 0;
      disk.bands.forEach(band => {
        let bandRowCount = 0;
        band.molecules.forEach(molecule => {
          molecule.data.forEach((dataItem, dataIndex) => {
            const itemKey = `${disk.id}-${band.name}-${molecule.name}-${dataItem.name}`;
            const isSelected = selectedItems.has(itemKey);
            rows.push(
              <tr key={itemKey} className={`${styles.tableRow} ${isSelected ? styles.selected : ''}`}>
                {diskRowCount === 0 && (
                  <td rowSpan={disk.bands.reduce((sum, b) => sum + b.molecules.reduce((sumM, mol) => sumM + mol.data.length, 0), 0)}>
                    {disk.disk}
                  </td>
                )}
                {bandRowCount === 0 && (
                  <td rowSpan={band.molecules.reduce((sum, mol) => sum + mol.data.length, 0)}>
                    {band.name}
                  </td>
                )}
                {dataIndex === 0 && (
                  <td rowSpan={molecule.data.length}>
                    {molecule.name}
                  </td>
                )}
                <td>
                  <div className={styles.checkbox}>
                    {dataItem.name}
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelectItem(itemKey)}
                    />
                  </div>
                </td>
              </tr>
            );
            diskRowCount++;
            bandRowCount++;
          });
        });
      });
    });

    return rows;
  };

  const totalPages = Math.ceil(dummyData.reduce((sum, disk) => sum + disk.bands.reduce((sumB, band) => sumB + band.molecules.reduce((sumM, molecule) => sumM + molecule.data.length, 0), 0), 0) / itemsPerPage);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              Disk
              <FilterListIcon onClick={() => handleSort('disk')} className={`${sortConfig.key === 'disk' ? styles.rotate : ''} ${styles.icon}`} />
            </th>
            <th>
              Band
            </th>
            <th>
              Molecule
            </th>
            <th>
              <div className={styles.checkboxHeader}>
                Data Item
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedItems.size === dummyData.flatMap(disk => disk.bands.flatMap(band => band.molecules.flatMap(molecule => molecule.data.map(dataItem => `${disk.id}-${band.name}-${molecule.name}-${dataItem.name}`)))).length}
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? styles.activePage : ''}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DataContainer;
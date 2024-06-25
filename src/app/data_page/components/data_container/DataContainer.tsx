"use client";
import React, { useState, useEffect } from 'react';
import styles from "./dataContainer.module.css";
import FilterListIcon from '@mui/icons-material/FilterList';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from './Pagination';
import dummyData from './dummyData.json';
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

const DataContainer: React.FC = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: '', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const disksPerPage = 1; // Show one disk per page
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [paginatedDisks, setPaginatedDisks] = useState<Disk[]>([]);

  useEffect(() => {
    // Update paginatedDisks whenever currentPage changes
    const start = (currentPage - 1) * disksPerPage;
    const end = start + disksPerPage;
    setPaginatedDisks(dummyData.slice(start, end));
  }, [currentPage]);


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

  const totalPages = Math.ceil(dummyData.length / disksPerPage);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableHeader
          sortConfig={sortConfig}
          handleSort={handleSort}
          handleSelectAll={handleSelectAll}
          isSelectedAll={selectedItems.size === dummyData.flatMap(disk => disk.bands.flatMap(band => band.molecules.flatMap(molecule => molecule.data.map(dataItem => `${disk.id}-${band.name}-${molecule.name}-${dataItem.name}`)))).length}
        />
        <TableRow
          disks={sortedData(paginatedDisks, sortConfig.key, sortConfig.direction)}
          selectedItems={selectedItems}
          handleSelectItem={handleSelectItem}
        />
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default DataContainer;
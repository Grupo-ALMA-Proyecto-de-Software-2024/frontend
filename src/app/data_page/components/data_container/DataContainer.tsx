"use client";
import React, { useState, useEffect } from 'react';
import styles from "./dataContainer.module.css";
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from './Pagination';
import { DiskDto, DataDto } from '@api/dto';

interface FlattenedDataItem extends DataDto {
  disk: string;
  band: string;
  molecule: string;
}

const DataContainer: React.FC<{ data: DiskDto[] }> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // Show 15 items per page
  const [paginatedItems, setPaginatedItems] = useState<FlattenedDataItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Flatten the data structure for pagination
    const flatData: FlattenedDataItem[] = data.flatMap(disk =>
      disk.bands.flatMap(band =>
        band.molecules.flatMap(molecule =>
          molecule.data.map(dataItem => ({
            ...dataItem,
            disk: disk.name,
            band: band.name,
            molecule: molecule.name,
          }))
        )
      )
    );

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedItems(flatData.slice(start, end));
  }, [currentPage, data]);

  const handleSelectAll = () => {
    const allItems = new Set(
      data.flatMap(disk =>
        disk.bands.flatMap(band =>
          band.molecules.flatMap(molecule =>
            molecule.data.map(dataItem => `${disk.name}-${band.name}-${molecule.name}-${dataItem.name}`)
          )
        )
      )
    );
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

  const totalPages = Math.ceil(
    data.reduce((sum, disk) => sum + disk.bands.reduce((sumBand, band) => sumBand + band.molecules.reduce((sumMol, molecule) => sumMol + molecule.data.length, 0), 0), 0) / itemsPerPage
  );

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableHeader
          handleSelectAll={handleSelectAll}
          isSelectedAll={selectedItems.size === paginatedItems.length}
        />
        <TableRow
          data={paginatedItems}
          selectedItems={selectedItems}
          handleSelectItem={handleSelectItem}
        />
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default DataContainer;
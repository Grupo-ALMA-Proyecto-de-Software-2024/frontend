"use client";
import React, { useState, useEffect } from 'react';
import styles from "./dataContainer.module.css";
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { DiskDto, DataDto } from '@api/dto';

/**
 * Interface representing a flattened data item with additional properties.
 */
interface FlattenedDataItem extends DataDto {
  disk: string;
  band: string;
  molecule: string;
}

/**
 * DataContainer component to display paginated data in a table format.
 * @param {DiskDto[]} data - Array of DiskDto objects.
 */
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

  /**
   * Handle selecting all items in the table.
   */
  const handleSelectAll = () => {
    const allItems = new Set(
      paginatedItems.map(dataItem => `${dataItem.disk}-${dataItem.band}-${dataItem.molecule}-${dataItem.name}`)
    );
    setSelectedItems(selectedItems.size === allItems.size ? new Set() : allItems);
  };

  /**
   * Handle selecting a specific item in the table.
   * @param {string} itemKey - The key of the item to select.
   */
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

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableHeader
          handleSelectAll={handleSelectAll}
          isSelectedAll={selectedItems.size === paginatedItems.length && selectedItems.size > 0}
        />
        <TableRow
          data={paginatedItems}
          selectedItems={selectedItems}
          handleSelectItem={handleSelectItem}
        />
      </table>
      <Stack spacing={2} className={styles.pagination}>
        <Pagination 
          count={totalPages} 
          page={currentPage} 
          onChange={handlePageChange} 
          size="medium" // Size Change
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'var(--textSoft)', // Change color font
            },
            '& .Mui-selected': {
              backgroundColor: 'var(--alma-light-blue)',
              color: 'var(--alma-blue)',
            },
            '& .MuiPaginationItem-root:hover': {
              backgroundColor: 'rgba(138, 198, 233, 0.4)',
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default DataContainer;
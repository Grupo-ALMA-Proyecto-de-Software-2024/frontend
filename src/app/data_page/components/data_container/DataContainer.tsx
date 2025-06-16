"use client";
import React, { useState, useEffect, useMemo } from 'react';
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
  imageLink: string | null; // Ensure isViewable is included here
}

/**
 * Props for the DataContainer component.
 */
interface DataContainerProps {
  data: DiskDto[];
  onOpenImage: (url: string) => void;
  selectedItems: Set<string>;
  setSelectedItems: React.Dispatch<React.SetStateAction<Set<string>>>;
}

/**
 * DataContainer component to display paginated data in a table format.
 * @param {DiskDto[]} data - Array of DiskDto objects.
 * @param {Function} onOpenImage - Function to open the image.
 */
const DataContainer: React.FC<DataContainerProps> = ({ data, onOpenImage, selectedItems, setSelectedItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30; // Mostrar más elementos por página
  const [paginatedItems, setPaginatedItems] = useState<FlattenedDataItem[]>([]);

  const flatData: FlattenedDataItem[] = useMemo(() => {
    return data.flatMap(disk =>
      disk.bands.flatMap(band =>
        band.molecules.flatMap(molecule =>
          molecule.data.map((dataItem) => ({
            ...dataItem,
            disk: disk.name,
            band: band.name,
            molecule: molecule.name,
            imageLink: dataItem.image_link || null
          }))
        )
      )
    );
  }, [data]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedItems(flatData.slice(start, end));
  }, [currentPage, flatData]);

  /**
   * Handle selecting all items in the table.
   */
  const handleSelectAll = () => {
    if (selectedItems.size === flatData.length) {
      setSelectedItems(new Set());
    } else {
      const allItems = new Set(
        flatData.map(dataItem => `${dataItem.disk}--${dataItem.band}--${dataItem.molecule}--${dataItem.name}--${flatData.indexOf(dataItem)}--${dataItem.filepath}`)
      );
      setSelectedItems(allItems);
    }
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

  const allItemsSelected = useMemo(() => {
    return selectedItems.size === flatData.length && flatData.length > 0;
  }, [selectedItems, flatData]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableHeader
          handleSelectAll={handleSelectAll}
          isSelectedAll={allItemsSelected}
        />
        <tbody>
          <TableRow
            data={paginatedItems}
            selectedItems={selectedItems}
            handleSelectItem={handleSelectItem}
            onOpenImage={onOpenImage} 
          />
        </tbody>
      </table>
      {/* Solo mostrar paginaciu00f3n si hay mu00e1s de una pu00e1gina */}
      {totalPages > 1 && (
        <Stack 
          spacing={1} 
          className={styles.pagination}
          sx={{ backgroundColor: 'var(--bg1)', borderRadius: '0 0 5px 5px' }}
        >
          <Pagination 
            count={totalPages} 
            page={currentPage} 
            onChange={handlePageChange} 
            size="small"
            siblingCount={0}
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'var(--textSoft)',
                padding: '0px',
                minWidth: '22px',
                height: '22px',
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
      )}
    </div>
  );
};

export default DataContainer;
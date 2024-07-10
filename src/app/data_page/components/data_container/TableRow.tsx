import React, { useState } from 'react';
import { TableRow as MuiTableRow, TableCell, Checkbox, Button } from '@mui/material';
import { DataDto } from '@api/dto';
import styles from './dataContainer.module.css';

interface FlattenedDataItem extends DataDto {
  disk: string;
  band: string;
  molecule: string;
  isViewable: boolean; // Ensure isViewable is included in the interface
}

interface TableRowProps {
  data: FlattenedDataItem[];
  selectedItems: Set<string>;
  handleSelectItem: (itemKey: string) => void;
  onOpenImage: (url: string) => void;
}

const TableRow: React.FC<TableRowProps> = ({ data, selectedItems, handleSelectItem, onOpenImage }) => {
  const renderRows = () => {
    const rows: React.ReactNode[] = [];
    let currentDisk = '';
    let currentBand = '';
    let currentMolecule = '';
    let diskRowSpan = 0;
    let bandRowSpan = 0;
    let moleculeRowSpan = 0;

    data.forEach((dataItem, index) => {
      const itemKey = `${dataItem.disk}-${dataItem.band}-${dataItem.molecule}-${dataItem.name}`;
      const isSelected = selectedItems.has(itemKey);

      const isNewDisk = dataItem.disk !== currentDisk;
      const isNewBand = isNewDisk || dataItem.band !== currentBand;
      const isNewMolecule = isNewBand || dataItem.molecule !== currentMolecule;

      if (isNewDisk) {
        currentDisk = dataItem.disk;
        currentBand = dataItem.band;
        currentMolecule = dataItem.molecule;
        diskRowSpan = data.filter(item => item.disk === currentDisk).length;
        bandRowSpan = data.filter(item => item.disk === currentDisk && item.band === currentBand).length;
        moleculeRowSpan = data.filter(item => item.disk === currentDisk && item.band === currentBand && item.molecule === currentMolecule).length;
      } else if (isNewBand) {
        currentBand = dataItem.band;
        currentMolecule = dataItem.molecule;
        bandRowSpan = data.filter(item => item.disk === currentDisk && item.band === currentBand).length;
        moleculeRowSpan = data.filter(item => item.disk === currentDisk && item.band === currentBand && item.molecule === currentMolecule).length;
      } else if (isNewMolecule) {
        currentMolecule = dataItem.molecule;
        moleculeRowSpan = data.filter(item => item.disk === currentDisk && item.band === currentBand && item.molecule === currentMolecule).length;
      }

      rows.push(
        <MuiTableRow key={itemKey} className={`${styles.tableRow} ${isSelected ? styles.selected : ''} ${isNewDisk ? styles.newDiskRow : ''}`}>
          {isNewDisk && <TableCell rowSpan={diskRowSpan}>{dataItem.disk}</TableCell>}
          {isNewBand && <TableCell rowSpan={bandRowSpan}>{dataItem.band}</TableCell>}
          {isNewMolecule && <TableCell rowSpan={moleculeRowSpan}>{dataItem.molecule}</TableCell>}
          <TableCell>
            <div className={styles.checkbox}>
              {dataItem.name}
              {dataItem.imageLink !== null && (
                <Button variant="outlined" onClick={() => onOpenImage(`${dataItem.filepath}`)}>View</Button>
              )}
              <Checkbox
                checked={isSelected}
                onChange={() => handleSelectItem(itemKey)}
              />
            </div>
          </TableCell>
        </MuiTableRow>
      );
    });

    return rows;
  };

  return (
    <>
      {renderRows()}
    </>
  );
};

export default TableRow;
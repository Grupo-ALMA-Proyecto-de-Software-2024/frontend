import React from 'react';
import { TableRow as MuiTableRow, TableCell, Checkbox, Button } from '@mui/material';
import { DataDto } from '@api/dto';
import styles from './dataContainer.module.css';

interface FlattenedDataItem extends DataDto {
  disk: string;
  band: string;
  molecule: string;
  imageLink: string | null;
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

    // Estilos personalizados para las celdas
    const cellStyle = {
      padding: '2px 6px',
      height: '30px',
      lineHeight: 1.2
    };

    data.forEach((dataItem, index) => {
      const itemKey = `${dataItem.disk}--${dataItem.band}--${dataItem.molecule}--${dataItem.name}--${index}--${dataItem.filepath}`; // Ensure unique key
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
        <MuiTableRow 
          key={itemKey} 
          className={`${styles.tableRow} ${isSelected ? styles.selected : ''} ${isNewDisk ? styles.newDiskRow : ''}`}
          sx={{ height: '30px' }}
        >
          {isNewDisk && <TableCell rowSpan={diskRowSpan} sx={cellStyle}>{dataItem.disk}</TableCell>}
          {isNewBand && <TableCell rowSpan={bandRowSpan} sx={cellStyle}>{dataItem.band}</TableCell>}
          {isNewMolecule && <TableCell rowSpan={moleculeRowSpan} sx={cellStyle}>{dataItem.molecule}</TableCell>}
          <TableCell sx={cellStyle}>
            <div className={styles.checkbox}>
              {dataItem.imageLink ? (
                <span className={styles.dataItem} onClick={() => onOpenImage(dataItem.imageLink!)}>{dataItem.name}</span>
              ) : (
                <span>{dataItem.name}</span>
              )}
              {dataItem.imageLink && (
                <Button 
                  variant="outlined" 
                  onClick={() => onOpenImage(dataItem.imageLink!)} 
                  className={styles.imageButton}
                  size="small"
                  sx={{ padding: '0px 6px', fontSize: '0.75rem', minWidth: '40px' }}
                >
                  View
                </Button>
              )}
              <Checkbox
                checked={isSelected}
                onChange={() => handleSelectItem(itemKey)}
                size="small"
                sx={{ padding: '0px' }}
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
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
  currentPage: number;
  itemsPerPage: number;
}

const TableRow: React.FC<TableRowProps> = ({ data, selectedItems, handleSelectItem, onOpenImage, currentPage, itemsPerPage }) => {
  const renderRows = () => {
    const rows: React.ReactNode[] = [];
    let currentDisk = '';
    let currentBand = '';
    let currentMolecule = '';
    let diskRowSpan = 0;
    let bandRowSpan = 0;
    let moleculeRowSpan = 0;

    // Estilos comunes para las celdas para hacer las filas más pequeñas
    const cellStyle = {
      padding: '2px 8px',
      height: '24px',
      fontSize: '0.9rem',
      lineHeight: 1.1
    };

    data.forEach((dataItem, index) => {
      const globalIndex = (currentPage - 1) * itemsPerPage + index;
      const itemKey = `${dataItem.disk}--${dataItem.band}--${dataItem.molecule}--${dataItem.name}--${globalIndex}--${dataItem.filepath}`; // Ensure unique key
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
          sx={{ height: '24px' }} // Altura reducida para la fila
        >
          {isNewDisk && <TableCell rowSpan={diskRowSpan} sx={cellStyle}>{dataItem.disk}</TableCell>}
          {isNewBand && <TableCell rowSpan={bandRowSpan} sx={cellStyle}>{dataItem.band}</TableCell>}
          {isNewMolecule && <TableCell rowSpan={moleculeRowSpan} sx={cellStyle}>{dataItem.molecule}</TableCell>}
          <TableCell sx={cellStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                {dataItem.imageLink ? (
                  <span onClick={() => onOpenImage(dataItem.imageLink!)}>{dataItem.name}</span>
                ) : (
                  <span>{dataItem.name}</span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {dataItem.imageLink && (
                  <Button 
                    variant="outlined" 
                    onClick={() => onOpenImage(dataItem.imageLink!)} 
                    size="small"
                    sx={{ 
                      padding: '0px 6px', 
                      minHeight: '22px', 
                      fontSize: '0.75rem',
                      marginRight: '8px'
                    }}
                  >
                    VIEW
                  </Button>
                )}
                <Checkbox
                  checked={isSelected}
                  onChange={() => handleSelectItem(itemKey)}
                  sx={{ padding: '0px' }}
                  size="small"
                />
              </div>
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
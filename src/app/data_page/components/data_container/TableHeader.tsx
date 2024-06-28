import React from 'react';
import { TableHead, TableRow, TableCell, Checkbox } from '@mui/material';
import styles from './dataContainer.module.css';

interface TableHeaderProps {
  handleSelectAll: () => void;
  isSelectedAll: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ handleSelectAll, isSelectedAll }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Disk</TableCell>
        <TableCell>Band</TableCell>
        <TableCell>Molecule</TableCell>
        <TableCell>
          <div className={styles.checkboxHeader}>
            Data Item
            <Checkbox onChange={handleSelectAll} checked={isSelectedAll} />
          </div>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
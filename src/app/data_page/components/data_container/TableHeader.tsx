import React from 'react';
import { TableCell, TableHead, TableRow, Checkbox, Tooltip, Zoom } from '@mui/material';
import styles from './dataContainer.module.css';

/**
 * Props for the TableHeader component.
 */
interface TableHeaderProps {
  handleSelectAll: () => void;
  isSelectedAll: boolean;
}

/**
 * TableHeader component to render the table headers.
 * @param {TableHeaderProps} props - The props for the component.
 */
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
            <Tooltip TransitionComponent={Zoom} title="Select All" arrow>
              <Checkbox
                onChange={handleSelectAll}
                checked={isSelectedAll}
                className={styles.checkbox}
              />
            </Tooltip>
          </div>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
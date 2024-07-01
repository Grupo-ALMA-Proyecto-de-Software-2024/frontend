import React from 'react';
import styles from './dataContainer.module.css';
import { Checkbox, Tooltip } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

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
    <thead>
      <tr>
        <th>Disk</th>
        <th>Band</th>
        <th>Molecule</th>
        <th>
          <div className={styles.checkboxHeader}>
            <span className={styles.headerText}>Data Item</span>
            <Tooltip title="Select All" placement="top">
              <Checkbox
                onChange={handleSelectAll}
                checked={isSelectedAll}
                className={styles.headerCheckbox}
              />
            </Tooltip>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
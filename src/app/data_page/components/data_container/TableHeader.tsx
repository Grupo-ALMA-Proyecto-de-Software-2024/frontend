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
  // Estilo para los encabezados
  const headerStyle = {
    padding: '4px 8px',
    height: '28px',
    fontSize: '0.9rem',
    lineHeight: 1.2
  };

  return (
    <thead>
      <tr style={{ height: '28px' }}>
        <th style={headerStyle}>Disk</th>
        <th style={headerStyle}>Band</th>
        <th style={headerStyle}>Molecule</th>
        <th style={headerStyle}>
          <div className={styles.checkboxHeader}>
            <span className={styles.headerText}>Data Item</span>
            <Tooltip title="Select All" placement="top">
              <Checkbox
                onChange={handleSelectAll}
                checked={isSelectedAll}
                className={styles.headerCheckbox}
                size="small"
                sx={{ padding: '0px' }}
              />
            </Tooltip>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
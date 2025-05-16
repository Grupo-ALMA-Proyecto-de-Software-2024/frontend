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
  // Estilos para hacer los encabezados más delgados
  const headerCellStyle = {
    padding: '4px 6px',
    height: '32px',
    lineHeight: 1.2
  };

  return (
    <thead>
      <tr style={{ height: '32px' }}>
        <th style={headerCellStyle}>Disk</th>
        <th style={headerCellStyle}>Band</th>
        <th style={headerCellStyle}>Molecule</th>
        <th style={headerCellStyle}>
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
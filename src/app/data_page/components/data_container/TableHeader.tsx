import React from 'react';
import styles from './dataContainer.module.css';
import FilterListIcon from '@mui/icons-material/FilterList';

interface TableHeaderProps {
  sortConfig: { key: string; direction: 'asc' | 'desc' };
  handleSort: (key: string) => void;
  handleSelectAll: () => void;
  isSelectedAll: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ sortConfig, handleSort, handleSelectAll, isSelectedAll }) => {
  return (
    <thead>
      <tr>
        <th>
          Disk
          <FilterListIcon onClick={() => handleSort('disk')} className={`${sortConfig.key === 'disk' ? styles.rotate : ''} ${styles.icon}`} />
        </th>
        <th>Band</th>
        <th>Molecule</th>
        <th>
          <div className={styles.checkboxHeader}>
            Data Item
            <input type="checkbox" onChange={handleSelectAll} checked={isSelectedAll} />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
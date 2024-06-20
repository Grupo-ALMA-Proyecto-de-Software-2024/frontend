import React from 'react';
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
    <thead>
      <tr>
        <th>Disk</th>
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
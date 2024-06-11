import React, { useState } from 'react';
import styles from './dataContainer.module.css';
import ImageModal from './imageModal';

interface DataItem {
  name: string;
  creationDate: string;
  file: string;
  isViewable: boolean;
}

interface Molecule {
  name: string;
  data: DataItem[];
}

interface Band {
  name: string;
  molecules: Molecule[];
}

interface Disk {
  id: string;
  disk: string;
  bands: Band[];
}

interface TableRowProps {
  disks: Disk[];
  selectedItems: Set<string>;
  handleSelectItem: (itemKey: string) => void;
}

const TableRow: React.FC<TableRowProps> = ({ disks, selectedItems, handleSelectItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const openModal = (imageUrl: string) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageUrl('');
  };

  const renderRows = () => {
    const rows: React.ReactNode[] = [];

    disks.forEach(disk => {
      let diskRowCount = 0;
      disk.bands.forEach(band => {
        let bandRowCount = 0;
        band.molecules.forEach(molecule => {
          molecule.data.forEach((dataItem, dataIndex) => {
            const itemKey = `${disk.id}-${band.name}-${molecule.name}-${dataItem.name}`;
            const isSelected = selectedItems.has(itemKey);
            rows.push(
              <tr key={itemKey} className={`${styles.tableRow} ${isSelected ? styles.selected : ''}`}>
                {diskRowCount === 0 && (
                  <td rowSpan={disk.bands.reduce((sum, b) => sum + b.molecules.reduce((sumM, mol) => sumM + mol.data.length, 0), 0)}>
                    {disk.disk}
                  </td>
                )}
                {bandRowCount === 0 && (
                  <td rowSpan={band.molecules.reduce((sum, mol) => sum + mol.data.length, 0)}>
                    {band.name}
                  </td>
                )}
                {dataIndex === 0 && (
                  <td rowSpan={molecule.data.length}>
                    {molecule.name}
                  </td>
                )}
                <td>
                  <div className={styles.checkbox}>
                    {dataItem.name}
                    {dataItem.isViewable && (
                      <button onClick={() => openModal(`/path/to/image/${dataItem.file}`)}>
                        View
                      </button>
                    )}
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelectItem(itemKey)}
                    />
                  </div>
                </td>
              </tr>
            );
            diskRowCount++;
            bandRowCount++;
          });
        });
      });
    });

    return rows;
  };

  return (
    <>
      <tbody>{renderRows()}</tbody>
      <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} imageUrl={modalImageUrl} />
    </>
  );
};

export default TableRow;
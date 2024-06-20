import React, { useState } from 'react';
import styles from './dataContainer.module.css';
import ImageModal from './imageModal';
import { DataDto } from '@api/dto';

/**
 * Interface representing a flattened data item with additional properties.
 */
interface FlattenedDataItem extends DataDto {
  disk: string;
  band: string;
  molecule: string;
}

/**
 * Props for the TableRow component.
 */
interface TableRowProps {
  data: FlattenedDataItem[];
  selectedItems: Set<string>;
  handleSelectItem: (itemKey: string) => void;
}

/**
 * TableRow component to render the rows of the table.
 * @param {TableRowProps} props - The props for the component.
 */
const TableRow: React.FC<TableRowProps> = ({ data, selectedItems, handleSelectItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  /**
   * Open the image modal.
   * @param {string} imageUrl - The URL of the image to display.
   */
  const openModal = (imageUrl: string) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  /**
   * Close the image modal.
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageUrl('');
  };

  /**
   * Render the rows of the table.
   * @returns {React.ReactNode[]} - The rows of the table.
   */
  const renderRows = () => {
    const rows: React.ReactNode[] = [];
    let currentDisk = '';
    let currentBand = '';
    let currentMolecule = '';
    let diskRowSpan = 0;
    let bandRowSpan = 0;
    let moleculeRowSpan = 0;

    data.forEach((dataItem, index) => {
      const itemKey = `${dataItem.disk}-${dataItem.band}-${dataItem.molecule}-${dataItem.name}`;
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
        <tr key={itemKey} className={`${styles.tableRow} ${isSelected ? styles.selected : ''}`}>
          {isNewDisk && <td rowSpan={diskRowSpan}>{dataItem.disk}</td>}
          {isNewBand && <td rowSpan={bandRowSpan}>{dataItem.band}</td>}
          {isNewMolecule && <td rowSpan={moleculeRowSpan}>{dataItem.molecule}</td>}
          <td>
            <div className={styles.checkbox}>
              {dataItem.name}
              {dataItem.isViewable && (
                <button onClick={() => openModal(`/path/to/image/${dataItem.file}`)}>View</button>
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
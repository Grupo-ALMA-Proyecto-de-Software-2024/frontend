import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './imageModal.module.css';

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <Box sx={modalStyle}>
        <Button onClick={onRequestClose} className={styles.closeButton}>Close</Button>
        <img src={imageUrl} alt="Viewable content" className={styles.image} />
      </Box>
    </Modal>
  );
};

export default ImageModal;
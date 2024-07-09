import React from 'react';
import { Modal, Box } from '@mui/material';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <img src={imageUrl} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
      </Box>
    </Modal>
  );
};

export default ImageModal;
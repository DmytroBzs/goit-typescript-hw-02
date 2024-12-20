import Modal, { Styles } from 'react-modal';
import React from 'react';
import { Image } from '../../types';

Modal.setAppElement('#root');

interface ImageModalProps {
  image: Image;
  onCloseModal: () => void;
  isOpen: boolean; // Змінено на boolean
}

const ImageModal: React.FC<ImageModalProps> = ({
  image: {
    urls: { regular },
    alt_description,
  },
  onCloseModal,
  isOpen,
}) => {
  const customStyles: Styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      padding: 0,
      border: 'none',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onCloseModal} style={customStyles}>
      <img
        style={{
          maxWidth: '95vw',
          maxHeight: '95vh',
          objectFit: 'contain',
        }}
        src={regular}
        alt={alt_description}
      />
    </Modal>
  );
};

export default ImageModal;

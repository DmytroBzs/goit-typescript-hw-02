import React from 'react';
import { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
  onOpenModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onOpenModal }) => {
  return (
    <ul className={css.list}>
      {images.map((image, index) => (
        <li className={css.listItem} key={index}>
          <ImageCard image={image} onClick={onOpenModal}></ImageCard>
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;

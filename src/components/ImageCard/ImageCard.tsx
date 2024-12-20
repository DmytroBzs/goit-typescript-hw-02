import { Image } from '../../types';
import React from 'react';
import css from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={css.container}>
      <img
        onClick={() => onClick(image)}
        className={css.cardImg}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};
export default ImageCard;

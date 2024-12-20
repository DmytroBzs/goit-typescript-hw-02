import { useState, useEffect } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Image } from '../../types';
import { fetchImg } from '../api';
import css from './App.module.css';

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [imgData, setImageData] = useState<Image[]>([]);
  const [currentImage, setCurrentImage] = useState<Image | null>(null);

  function openModal(imgOnClick: Image): void {
    setCurrentImage(imgOnClick);
    setModalIsOpen(true);
  }

  function closeModal(): void {
    setCurrentImage(null);
    setModalIsOpen(false);
  }

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearch = (newSearchText: string): void => {
    setQuery(newSearchText);
    setPage(1);
    setImageData([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function findImg() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data: Image[] = await fetchImg(query, page);
        setImageData(prevImg => [...prevImg, ...data]);
      } catch (error) {
        console.error('Error fetching images:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    findImg();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {imgData.length > 0 && (
        <ImageGallery images={imgData} onOpenModal={openModal}></ImageGallery>
      )}
      {imgData.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>
      )}
      {modalIsOpen && currentImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onCloseModal={closeModal}
          image={currentImage}
        ></ImageModal>
      )}
    </div>
  );
}

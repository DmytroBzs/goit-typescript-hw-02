import { useState, useEffect } from "react";
import ImageModal from "../ImageModal/ImageModal.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "../Loader/Loader.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { fetchImg } from "../api.js";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";

export default function App(){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imgData, setImageData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(``);
  

  function openModal(imgOnClick) {
    setCurrentImage(imgOnClick)
    setModalIsOpen(true);

  }

  function closeModal(){
    setCurrentImage(null)
    setModalIsOpen(false);
  }
  const handleLoadMore = () => {
    setPage(page + 1)
  }
  const handleSearch = (newSerchText) => {
    setQuery(newSerchText)
    setPage(1)
    setImageData([])
  }

  useEffect(() => {
    if(query === ``){
      return 
    }
    async function findImg(){
      try {
        setIsLoading(true)
        const data = await fetchImg(query, page)
        setImageData(prevImg => {
          return [...prevImg, ...data]
        })
      } catch (error){
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    findImg()
  }, [query, page]);

  return (
    <div className={CSS.container}>
<SearchBar onSearch={handleSearch}></SearchBar>
{isLoading && <Loader />}
{isError && <ErrorMessage/>}
{imgData.length > 0 && <ImageGallery images={imgData} onOpenModal={openModal}></ImageGallery>}
{imgData.length > 0 && <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>}
{modalIsOpen && <ImageModal isOpen={modalIsOpen} onCloseModal={closeModal} image={currentImage}></ImageModal>}
    </div>

  )

  


}
import { useEffect, useState } from "react";
import { fetchData } from "./service/unsplashAPI";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import NoResultsMessage from "./components/NoResultsMessage/NoResultsMessage";

import "./App.css";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [searchParams, setSearchParams] = useState({ query: "", page: 1 });

  const [images, setImages] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState("");
  const [hasMorePhotos, setHasMorePhotos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const [isModalImageLoading, setIsModalImageLoading] = useState(false);

  useEffect(() => {
    const { query, page } = searchParams;
    if (!query) return;

    const getPhotos = async () => {
      console.log("Запит:", query, "Сторінка:", page);
      setError("");
      setIsLoading(true);
      setIsEmpty(false);
      try {
        const {
          results: photos,
          total,
          total_pages,
        } = await fetchData(query, page);
        console.log("query:", query);
        console.log("total:", total);
        console.log("photos.length:", photos.length);

        if (total === 0) {
          setIsEmpty(true);
          return;
        }

        setImages((prev) => [...prev, ...photos]);
        setHasMorePhotos(page < total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPhotos();
  }, [searchParams]);

  const handleFormSubmit = (query) => {
    setSearchParams({ query, page: 1 });
    setImages([]);
    setIsEmpty(false);
    setHasMorePhotos(false);
    setError("");
  };

  const handleLoadMore = () => {
    setSearchParams((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  const handleOpenModal = (image) => {
    setModalImage(image);
    setIsModalImageLoading(true);
    setModalIsOpen(true);
  };

  const handleImageLoad = () => {
    setIsModalImageLoading(false);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={handleOpenModal} />
      )}

      {error && (
        <ErrorMessage
          message={
            "Failed to load images. Please check your connection or try again later."
          }
          error={error?.message || "Unknown error"}
        />
      )}
      {isEmpty && <NoResultsMessage query={searchParams.query} />}
      {hasMorePhotos && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        image={modalImage}
        onImageLoad={handleImageLoad}
        isLoading={isModalImageLoading}
      />
      {isModalImageLoading && <Loader />}
    </>
  );
}

export default App;

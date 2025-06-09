import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchData } from "./service/unsplashAPI";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import NoResultsMessage from "./components/NoResultsMessage/NoResultsMessage";

import "./App.css";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SkeletonGallery from "./components/SkeletonGallery/SkeletonGallery";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";

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
  const [wasLoadedOnce, setWasLoadedOnce] = useState(false);

  useEffect(() => {
    const { query, page } = searchParams;
    if (!query) return;
    setWasLoadedOnce(true);

    const getPhotos = async () => {
      setError("");
      setIsLoading(true);
      setIsEmpty(false);
      try {
        const {
          results: photos,
          total,
          total_pages,
        } = await fetchData(query, page);

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
    setHasMorePhotos(true);
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
      {!searchParams.query && images.length === 0 && <WelcomeMessage />}
      <InfiniteScroll
        dataLength={images.length}
        next={handleLoadMore}
        hasMore={hasMorePhotos}
        loader={isLoading && <SkeletonGallery />}
        endMessage={
          wasLoadedOnce && !hasMorePhotos ? (
            <p style={{ textAlign: "center" }}>
              You have reached the end of the gallery!
            </p>
          ) : null
        }
      >
        <ImageGallery images={images} openModal={handleOpenModal} />
      </InfiniteScroll>

      {error && (
        <ErrorMessage
          message={
            "Failed to load images. Please check your connection or try again later."
          }
          error={error?.message || "Unknown error"}
        />
      )}
      {isEmpty && <NoResultsMessage query={searchParams.query} />}

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

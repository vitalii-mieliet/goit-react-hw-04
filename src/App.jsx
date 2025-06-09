import { useEffect, useState } from "react";
import { fetchData } from "./service/unsplashAPI";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import NoResultsMessage from "./components/NoResultsMessage/NoResultsMessage";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("1");
  const [images, setImages] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState("");
  const [hasMorePhotos, setHasMorePhotos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  useEffect(() => {
    if (!query) return;
    const getPhotos = async () => {
      setIsLoading(true);
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
  }, [query, page]);

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setIsEmpty(false);
    setHasMorePhotos(false);
    setError("");
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (image) => {
    setModalImage(image);

    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Section>
        <Container>
          <SearchBar onSubmit={handleFormSubmit} />
          {images.length > 0 && (
            <ImageGallery images={images} openModal={handleOpenModal} />
          )}
          {isLoading && <Loader />}
          {hasMorePhotos && <LoadMoreBtn onClick={handleLoadMore} />}
          {error && (
            <ErrorMessage
              message={
                "Failed to load images. Please check your connection or try again later."
              }
              error={error}
            />
          )}
          {isEmpty && <NoResultsMessage query={query} />}
          <ImageModal
            modalIsOpen={modalIsOpen}
            closeModal={handleCloseModal}
            image={modalImage}
          />
        </Container>
      </Section>
    </>
  );
}

export default App;

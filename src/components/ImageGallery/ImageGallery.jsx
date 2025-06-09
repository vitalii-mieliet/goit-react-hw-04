import Container from "../Container/Container";
import ImageCard from "../ImageCard/ImageCard";
import Section from "../Section/Section";
import Masonry from "react-masonry-css";
import { FaPlus } from "react-icons/fa";
import styles from "./ImageGallery.module.css";

const breakpointColumns = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

const ImageGallery = ({ images, openModal }) => {
  return (
    <Section>
      <Container>
        <Masonry
          breakpointCols={breakpointColumns}
          className={styles.masonryGrid}
          columnClassName={styles.masonryColumn}
        >
          {images.map((image) => (
            <div key={image.id} className={styles.masonryItem}>
              <ImageCard image={image} openModal={openModal} />
            </div>
          ))}
        </Masonry>
      </Container>
    </Section>
  );
};

export default ImageGallery;

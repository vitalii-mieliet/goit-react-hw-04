import Container from "../Container/Container";
import ImageCard from "../ImageCard/ImageCard";
import Section from "../Section/Section";

const ImageGallery = ({ images, openModal }) => {
  return (
    <Section>
      <Container>
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default ImageGallery;

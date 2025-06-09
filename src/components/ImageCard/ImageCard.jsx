import styles from "./ImageCard.module.css";

const ImageCard = ({ image: { urls, alt_description }, openModal }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={urls.small}
        alt={alt_description}
        loading="lazy"
        onClick={() => openModal({ src: urls.full, alt: alt_description })}
      />
    </div>
  );
};

export default ImageCard;

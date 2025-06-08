const ImageCard = ({ image: { urls, alt_description }, openModal }) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => openModal({ src: urls.full, alt: alt_description })}
      />
    </div>
  );
};

export default ImageCard;

import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { FiExternalLink, FiDownload } from "react-icons/fi";
import styles from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
  },
  content: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    border: "none",
    background: "transparent",
    inset: 0,
    overflow: "visible",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({
  isLoading,
  modalIsOpen,
  onImageLoad,
  closeModal,
  image,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onLoad={onImageLoad}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={styles.wrapper}>
        {!isLoading && (
          <button className={styles.closeBtn} onClick={closeModal}>
            <IoClose size={24} />
          </button>
        )}
        <img
          className={styles.image}
          src={image.src}
          alt={image.alt || image.description}
          onLoad={onImageLoad}
        />
        <div className={styles.footerOverlay}>
          <span className={styles.desc} title={image.description || image.alt}>
            {image.description || image.alt}
          </span>

          <div className={styles.actions}>
            {image.links?.html && (
              <a
                href={image.links.html}
                target="_blank"
                rel="noreferrer"
                title="View on Unsplash"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink />
              </a>
            )}

            {image.links?.download && (
              <a
                href={image.links.download}
                download
                target="_blank"
                rel="noreferrer"
                title="Download"
                onClick={(e) => e.stopPropagation()}
              >
                <FiDownload />
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;

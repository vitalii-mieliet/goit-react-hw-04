import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
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

const ImageModal = ({ modalIsOpen, closeModal, image: { src, alt } }) => {
  return (
    <div className={styles.wrapper}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className={styles.closeBtn} onClick={closeModal}>
          <IoClose size={24} />
        </button>
        <img className={styles.image} src={src} alt={alt} />
      </Modal>
    </div>
  );
};

export default ImageModal;

import { FaRegHeart } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import styles from "./ImageCard.module.css";

const ImageCard = ({
  image: { urls, alt_description, likes, user },
  openModal,
}) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={urls.small}
        alt={alt_description}
        loading="lazy"
        onClick={() => openModal({ src: urls.full, alt: alt_description })}
      />
      <div className={styles.overlay}>
        <div className={styles.left}>
          <a
            href={user.links.html}
            target="_blank"
            rel="noreferrer"
            className={styles.username}
            title="View Unsplash profile"
          >
            @{user.username}
          </a>

          {user.social?.portfolio_url && (
            <a
              href={user.social.portfolio_url}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
              title="Open personal site or Instagram"
            >
              {user.social.portfolio_url.includes("instagram.com") ? (
                <FaInstagram />
              ) : (
                <FiExternalLink />
              )}
            </a>
          )}
        </div>

        <div className={styles.likes}>
          <FaRegHeart />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

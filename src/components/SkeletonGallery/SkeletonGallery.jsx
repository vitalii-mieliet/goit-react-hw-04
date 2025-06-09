import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Container from "../Container/Container";
import Section from "../Section/Section";
import Masonry from "react-masonry-css";
import styles from "../ImageGallery/ImageGallery.module.css";

const breakpointColumns = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

const SkeletonGallery = ({ count = 25 }) => {
  const skeletons = Array.from({ length: count });

  return (
    <Section>
      <Container>
        <Masonry
          breakpointCols={breakpointColumns}
          className={styles.masonryGrid}
          columnClassName={styles.masonryColumn}
        >
          {skeletons.map((_, index) => {
            const randomHeight = Math.floor(Math.random() * 150) + 200; // 200–350
            return (
              <div key={index} className={styles.masonryItem}>
                <Skeleton height={randomHeight} borderRadius={12} />
              </div>
            );
          })}
        </Masonry>
      </Container>
    </Section>
  );
};

export default SkeletonGallery;

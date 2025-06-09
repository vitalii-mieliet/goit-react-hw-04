import styles from "./NoResultsMessage.module.css";

const NoResultsMessage = ({ query }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>
        No results found for "<span className={styles.query}>{query}</span>".
      </p>
    </div>
  );
};

export default NoResultsMessage;

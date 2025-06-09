import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({
  error,
  message = "Something went wrong. Please try again later.",
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>{message}</p>
      {error && <p className={styles.details}>{error}</p>}
    </div>
  );
};

export default ErrorMessage;

import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.emoji}>🔍</div>
      <p className={styles.text}>
        Start by entering a keyword to search for beautiful images.
      </p>
      <img
        src="/bruce.gif"
        alt="Bruce typing"
        className={styles.gif}
        loading="lazy"
      />
    </div>
  );
};

export default WelcomeMessage;

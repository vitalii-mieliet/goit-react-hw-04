import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <BeatLoader
        color="#221bee"
        cssOverride={{}}
        loading
        margin={10}
        size={20}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;

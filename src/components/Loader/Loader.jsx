import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div>
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

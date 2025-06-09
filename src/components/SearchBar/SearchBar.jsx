import { IoSearchSharp } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (formData) => {
    const value = Object.fromEntries(formData).searchField;
    if (!value.trim())
      return toast.error("Oops! Looks like you forgot to type something.");
    onSubmit(value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} action={handleSubmit}>
        <input
          className={css.input}
          name="searchField"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <IoSearchSharp className={css.icon} />
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </header>
  );
};

export default SearchBar;

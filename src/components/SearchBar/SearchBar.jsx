import { IoSearchSharp } from "react-icons/io5";

import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (formData) => {
    const value = Object.fromEntries(formData).searchField;
    if (!value) return console.log("Enter some text");
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
    </header>
  );
};

export default SearchBar;

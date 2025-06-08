const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (formData) => {
    const value = Object.fromEntries(formData).searchField;
    onSubmit(value);
  };

  return (
    <header>
      <form action={handleSubmit}>
        <input
          name="searchField"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

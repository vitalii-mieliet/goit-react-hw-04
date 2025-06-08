const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (formData) => {
    const value = Object.fromEntries(formData).searchField;
    if (!value) return console.log("Enter some text");
    onSubmit(value);
  };

  return (
    <header>
      <form action={handleSubmit}>
        <input
          name="searchField"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

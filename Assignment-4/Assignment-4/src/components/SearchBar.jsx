function SearchBar({ searchCity, setSearchCity, handleSearch }) {
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="search-input-wrapper">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search for a city..."
          value={searchCity}
          onChange={(event) => setSearchCity(event.target.value)}
        />
      </div>

      <button type="submit" className="search-button">
        <span>Search</span>
        <span className="arrow">→</span>
      </button>
    </form>
  );
}

export default SearchBar;
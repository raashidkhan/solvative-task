import React, { useEffect, useRef } from "react";

const SearchBox = ({ state, searchTerm, setSearchTerm }) => {
  const inputRef = useRef(null);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "/") {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="search-box-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="search-box"
        placeholder="Search for places..."
        disabled={state === "LOADING"}
        ref={inputRef}
      />
      <span className="search-box-shortcut">Ctrl + /</span>
    </div>
  );
};

export default SearchBox;

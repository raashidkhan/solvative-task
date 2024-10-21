import React, { useState } from "react";

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  setItemsPerPage,
  onPrevPage,
  onNextPage,
  onPageChange = () => {},
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleItemsPerPageChange = (event) => {
    const value = event.target.value;
    if (value > 10) {
      setErrorMessage("Max allowed is 10");
    } else {
      setErrorMessage("");
      setItemsPerPage(value);
      onPageChange(0);
    }
  };

  return (
    <div className="pagination">
      <button
        className="button"
        onClick={onPrevPage}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <span>
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        className="button"
        onClick={onNextPage}
        disabled={currentPage === totalPages - 1}
      >
        Next
      </button>
      <div className="pagination-items-per-page">
        <input
          className="input"
          type="number"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          min="1"
          max="10"
        />
        <span> items per page</span>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Pagination;

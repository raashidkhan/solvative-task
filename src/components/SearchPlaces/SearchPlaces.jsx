import React, { useState, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import DataTable from "../DataTable/DataTable";
import Pagination from "../Pagination/Pagination";
import api from "../../utils/axios";

const SearchPlaces = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState("INITIAL");
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        fetchData(searchTerm);
      } else {
        setState("INITIAL");
        setData([]);
        setTotalPages(null);
      }
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, offset]);

  const fetchData = async (term) => {
    setState("LOADING");
    let url = `/cities`;

    try {
      const response = await api.get(url, {
        params: {
          namePrefix: term,
          limit: limit,
          offset: offset,
        },
      });
      setData(response.data.data);
      setTotalPages(response.data.metadata.totalCount);
      setState("SUCCESS");
    } catch (error) {
      console.error("Error fetching data:", error);
      setState("ERROR");
    }
  };

  const handleNextPage = () => {
    if (offset < totalPages - limit) {
      setState("LOADING");
      setOffset((state) => Number(state) + Number(limit));
    }
  };
  const handlePrevPage = () => {
    if (offset >= limit) {
      setState("LOADING");
      setOffset((state) => Number(state) - Number(limit));
    }
  };

  return (
    <div className="search-places">
      <div>
        <SearchBox
          state={state}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      {state === "LOADING" && (
        <div className="loader-wrapper">
          <span class="loader"></span>
        </div>
      )}
      <DataTable data={data} state={state} />
      {state === "ERROR" && <div>Error loading data</div>}
      {totalPages && (
        <Pagination
          currentPage={offset / limit}
          totalPages={totalPages}
          itemsPerPage={limit}
          setItemsPerPage={setLimit}
          onPageChange={setOffset}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      )}
    </div>
  );
};

export default SearchPlaces;

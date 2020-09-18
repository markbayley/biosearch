import React from "react";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";
// import BioResultPagination from "./BioResultPagination";
import ImageModal from "./ImageModal";

import NoResults from "./NoResults";
import AppError from "./AppError";
import BioSearchControlBar from "./search-control-bar/BioSearchControlBar";

const SearchEngine = () => {
  const data = useSelector((state) => state.search.hits);
  const totalDocuments = useSelector((state) => state.search.totalDocuments) || 0;

  // TODO: Would be nice to add logic somewhere to send us email
  // if there is error. Will do it later. Just remember!!
  const error = useSelector((state) => state.search.error);

  if (error) {
    return <AppError />;
  }
  if (totalDocuments === 0) {
    return <NoResults />;
  }
  // TODO: Replace BioResultPagination with BioSearchControlBar

  return (
    <>
      {/* <BioResultPagination /> */}
      <BioSearchControlBar />
      <div className="d-flex flex-wrap">
        {data.map((bioImageDocument, index) => (
          <SearchResult
            imageIdx={index}
            key={bioImageDocument["_id"]}
            totalDocuments={totalDocuments}
          />
        ))}
      </div>

      <ImageModal />

      {/* <BioResultPagination /> */}
      <BioSearchControlBar />
    </>
  );
};

export default SearchEngine;

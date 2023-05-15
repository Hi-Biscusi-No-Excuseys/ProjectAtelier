import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search({ filterText, setFilterText }) {
  return (
    <div className="search-container">
      <input
        className="search-bar"
        placeholder="Have A Question? Search for Answers..."
        type="text"
        value={filterText}
        onChange={(e) => { setFilterText(e.target.value); }}
      />
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
    </div>

  );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Search({filterText, setFilterText}) {
  return (

    <div className="search-container" >
      <input
        className="search-bar"
        placeholder="Have A Question? Search for Answers..."
        type="text"
        value={filterText}
        onChange={(e)=> setFilterText(e.target.value)}/>
      <FontAwesomeIcon  className="search-icon" icon={faSearch} />
      </div>

  );
}

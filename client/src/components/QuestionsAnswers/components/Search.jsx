import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Search() {
  return (

    <div className="search-container" >
      <input className="search-bar" placeholder="Have A Question? Search for Answers..."></input>
      <FontAwesomeIcon  className="search-icon" icon={faSearch} />
      </div>

  );
}

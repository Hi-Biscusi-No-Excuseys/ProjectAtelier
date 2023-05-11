import React, {useState, useEffect} from 'react';
import PartialStars from './PartialStars.jsx';
import StarBar from './StarBar.jsx';

export default function RatingBreakdown({amount, metaData, avg}) {


  return (
    metaData && 
    (<div id="rating-breakdown">
  
      <div id='overall-rating'> {avg} <PartialStars avg={avg} /> </div>

      <p>{
        Math.round((parseInt(metaData.recommended.true, 10) / (parseInt(metaData.recommended.true, 10) + parseInt(metaData.recommended.false, 10))) * 100)
        }% of reviews recommend this product.
      </p>

      <div id='5-stars'>
        <a>5 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["5"], 10) / amount) * 100)} />
      </div>

      <div id='4-stars'>
        <a>4 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["4"], 10) / amount) * 100)} />
      </div>

      <div id='3-stars'>
        <a>3 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["3"], 10) / amount) * 100)} />
      </div>

      <div id='2-stars'>
        <a>2 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["2"], 10) / amount) * 100)} />
      </div>
      
      <div id='1-stars'>
        <a>1 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["1"], 10) / amount) * 100)} />
      </div>
  
    </div>)
    
  )
}

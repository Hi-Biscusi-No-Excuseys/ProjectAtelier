import React, {useState, useEffect} from 'react';
import PartialStars from './PartialStars.jsx';
import StarBar from './StarBar.jsx';

export default function RatingBreakdown({amount, metaData, avg, starFilter, setStarFilter}) {

  return (
    metaData && 
    <div id="rating-breakdown">
  
      <div id='overall-rating'> {avg} <PartialStars avg={avg}/> </div>

      <p>{
        Math.round((parseInt(metaData.recommended.true, 10) / (parseInt(metaData.recommended.true, 10) + parseInt(metaData.recommended.false, 10))) * 100)
        }% of reviews recommend this product.
      </p>

      <div id='5-stars' className={starFilter[5] ? 'star-filtered' : null} onClick={() => setStarFilter({...starFilter, 5: !starFilter[5]})}>
        <a>5 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["5"], 10) / amount) * 100)} />
        ({metaData.ratings['5'] ? metaData.ratings['5'] : '0'})
      </div>

      <div id='4-stars' className={starFilter[4] ? 'star-filtered' : null} onClick={() => setStarFilter({...starFilter, 4: !starFilter[4]})}>
        <a>4 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["4"], 10) / amount) * 100)} />
        ({metaData.ratings['4'] ? metaData.ratings['4'] : '0'})
      </div>

      <div id='3-stars' className={starFilter[3] ? 'star-filtered' : null} onClick={() => setStarFilter({...starFilter, 3: !starFilter[3]})}>
        <a>3 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["3"], 10) / amount) * 100)} />
        ({metaData.ratings['3'] ? metaData.ratings['3'] : '0'})
      </div>

      <div id='2-stars' className={starFilter[2] ? 'star-filtered' : null} onClick={() => setStarFilter({...starFilter, 2: !starFilter[2]})}>
        <a>2 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["2"], 10) / amount) * 100)} />
        ({metaData.ratings['2'] ? metaData.ratings['2'] : '0'})
      </div>
      
      <div id='1-stars' className={starFilter[1] ? 'star-filtered' : null} onClick={() => setStarFilter({...starFilter, 1: !starFilter[1]})}>
        <a>1 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["1"], 10) / amount) * 100)} />
        ({metaData.ratings['1'] ? metaData.ratings['1'] : '0'})
      </div>
  
    </div>
    )
    
}

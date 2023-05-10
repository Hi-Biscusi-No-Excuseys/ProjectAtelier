import React, {useState} from 'react';
import axios from 'axios';

export default function RatingBreakdown({product}) {



  return (
    <div id="rating-breakdown">
      <div id='overall-rating'>
        <h1>3.5</h1>
        <div>stars</div>
      </div>

      <p>% of reviews recommend this product.</p>

      <div id='5-stars'>
        <a>5 stars</a>
        <span>% bar</span>
      </div>

    </div>
  );
}

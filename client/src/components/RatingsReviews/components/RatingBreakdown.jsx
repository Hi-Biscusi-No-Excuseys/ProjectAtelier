import React from 'react';
import PartialStars from './PartialStars';
import StarBar from './StarBar';

export default function RatingBreakdown({
  amount, metaData, avg, starFilter, setStarFilter,
}) {
  const stars = [5, 4, 3, 2, 1];

  return (
    metaData
    && (
    <div id="rating-breakdown" data-testid="rating-breakdown">
      <div id="overall-rating">
        {' '}
        <span>{avg}</span>
        {' '}
        <PartialStars avg={avg} />
        {' '}
      </div>
      <p id="reviews-recommend">
        { Math.round((parseInt(metaData.recommended.true, 10)
        / (parseInt(metaData.recommended.true, 10)
        + parseInt(metaData.recommended.false, 10))) * 100) }
        % of reviews recommend this product.
      </p>

      {stars.map((star) => (
        <button type="button" key={`${star}-stars`} className={`star-filter ${starFilter[star] ? 'star-filtered' : null}`} onClick={() => setStarFilter({ ...starFilter, [star]: !starFilter[star] })}>
          <p>
            {star}
            {' '}
            Stars
          </p>
          <StarBar percentage={Math.floor((parseInt(metaData.ratings[star.toString()], 10)
            / amount) * 100)}
          />
          <span>
            (
            {metaData.ratings[star.toString()] ? metaData.ratings[star.toString()] : '0'}
            )
          </span>
        </button>
      ))}
    </div>
    )
  );
}

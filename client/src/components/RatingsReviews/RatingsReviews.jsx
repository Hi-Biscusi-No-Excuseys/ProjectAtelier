import React, {useState} from 'react';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import SortOptions from './components/SortOptions.jsx';
import ReviewsList from './components/ReviewsList.jsx';

export default function RatingsReviews({product}) {
  product = 40432;
  const [sort, setSort] = useState('relevant');
  const [amount, setAmount] = useState(0);

  return (
    <div id='reviews'>
      <h3>Ratings & Reviews</h3>

      <div id='breakdown-list'>
        <aside>
          <RatingBreakdown product={product.id} setAmount={setAmount}/>
          <ProductBreakdown product={product.id}/>
        </aside>

        <div id='sort-and-list'>
          <SortOptions sort={sort} setSort={setSort} amount={amount} />
          <ReviewsList product={product.id} sort={sort} amount={amount}/>
        </div>
      </div>

    </div>
  );
}

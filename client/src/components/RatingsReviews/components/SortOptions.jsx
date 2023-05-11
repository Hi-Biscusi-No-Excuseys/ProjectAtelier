import React from 'react';

export default function SortOptions({sort, setSort, amount}) {


  return (
    <div id="reviews-sort">
      <label htmlFor="sort">{amount} reviews, sorted by </label>
      <select name="sort" id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="relevant">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}

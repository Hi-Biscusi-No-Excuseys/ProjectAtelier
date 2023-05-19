import React from 'react';

export default function Description({ overview }) {
  const { features } = overview;

  return (
    <div className="productDescription">
      <div className="slogan">{overview.slogan}</div>
      <div className="descBox">
        <div className="overviewDescription">
          <p>{overview.description}</p>
        </div>
        <div id="featureList">
          {features?.map((list, i) => {
            if (list.value !== null) {
              return (
                <ul key={i} className="productFeatures">
                  {list.feature}
                  ,
                  {' '}
                  {list.value}
                </ul>
              );
            }
            return <ul key={i}>{list.feature}</ul>;
          })}
        </div>
      </div>
    </div>
  );
}

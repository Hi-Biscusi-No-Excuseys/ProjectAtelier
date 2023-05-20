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
                  <li>
                    {list.feature}
                    ,
                    {' '}
                    {list.value}
                  </li>
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

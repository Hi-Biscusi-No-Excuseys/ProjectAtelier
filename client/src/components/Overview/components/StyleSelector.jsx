import React from 'react';

export default function StyleSelector({styles}) {
  const styleOptions = styles.slice(1);

  return (
    <div className="styleselector">
      <span><strong>Style &#8594;</strong>Selected Style</span>
      <div className="stylesBox">
        {styleOptions.map((style, i)=>{
          return <img key={i} className="styleIcon" src={style.photos[0]?.thumbnail_url} alt={style.name} height='75' width='75'/>
        })}
      </div>
    </div>
  );
}

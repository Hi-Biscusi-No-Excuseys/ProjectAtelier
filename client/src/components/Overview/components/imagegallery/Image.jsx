import React from 'react';

export default function Image({style, imgSwitch}) {
  console.log('THIS IS STYLE: ', style);
  return (
    <div>
      <img className="productIcon" src={style.photos[0]?.thumbnail_url} alt={style.name} height='75' width='75' onClick={(e)=>{
        console.log(e.target.src);
        imgSwitch("'" + e.target.src + "'");
      }}/>
    </div>
  );
}

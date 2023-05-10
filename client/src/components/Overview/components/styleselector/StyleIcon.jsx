import React from 'react';

export default function StyleIcon({style, styleSwap}) {

  return (
    <div>
      <img className="styleIcon" src={style.photos[0]?.thumbnail_url} alt={style.name} height='75' width='75' onClick={()=>{ styleSwap(style) }}/>
    </div>
  );
}

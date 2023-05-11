import React, {useState} from 'react';

export default function StyleIcon({style, selected, styleSwap, first}) {

  return (
    <div>
      <img
      className="styleIcon"
      src={style.photos[0]?.thumbnail_url}
      alt={style.name}
      height='75'
      width='75'
      onClick={()=>{ styleSwap(style) }}/>
      {selected && <input type="checkbox" checked={true} readOnly={true} />}
    </div>
  );
}

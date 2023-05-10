import React, {useState, useEffect} from 'react';
import StyleIcon from './styleselector/StyleIcon';

export default function StyleSelector({styles, currentStyle, styleSwap}) {

  return (
    <div className="styleselector">
      <span><strong>Style &#8594; </strong>{currentStyle?.name}</span>
      <div className="stylesBox">
        {styles.map((style, i)=>{
          return <StyleIcon key={i} style={style} styleSwap={styleSwap}/>
        })}
      </div>
    </div>
  );
}

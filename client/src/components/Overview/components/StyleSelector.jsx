import React from 'react';
import StyleIcon from './styleselector/StyleIcon';

export default function StyleSelector({ styles, currentStyle, styleSwap }) {
  return (
    <div className="styleselector" data-testid="styleselector">
      <div className="styleName">
        <p className="style">Style &#8594; </p>
        <p>{currentStyle?.name}</p>
      </div>
      <div className="stylesBox">
        {styles.map((style, i) => (
          <StyleIcon
            key={i}
            style={style}
            selected={style === currentStyle}
            styleSwap={styleSwap}
          />
        ))}
      </div>
    </div>
  );
}

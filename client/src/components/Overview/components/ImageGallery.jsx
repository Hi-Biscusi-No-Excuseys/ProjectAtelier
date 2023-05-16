import React, { useState } from 'react';
import Image from './imagegallery/Image';

export default function ImageGallery({ currentStyle }) {
  const [expanded, setExpanded] = useState(false);

  const imgSwitch = (smallImg) => {
    const main = document.getElementById('mainImg');
    main.src = smallImg.url;
  };

  const expand = () => {
    if (!expanded) {
      document.getElementById('productImage').style.width = '1000px';
      document.getElementById('productImage').style.height = '900px';
      document.getElementById('mainImg').style.height = '800px';
      document.getElementById('mainImg').style.width = '1000px';
      setExpanded(!expanded);
    } else {
      document.getElementById('productImage').style.width = '850px';
      document.getElementById('productImage').style.height = '700px';
      document.getElementById('mainImg').style.height = '700px';
      document.getElementById('mainImg').style.width = '850px';
      setExpanded(!expanded);
    }
  };

  return (
    <div className="ImageGallery">
      <div className="scroll">
        {currentStyle?.photos.map((style, i) => <Image key={i} style={style} imgSwitch={imgSwitch} />)}
      </div>
      <div className="productImage" id="productImage">
        <img
          className="mainImg"
          id="mainImg"
          src={currentStyle?.photos[0].url}
          alt={currentStyle?.name}
          height="700"
          width="850"
          onClick={() => { expand(); }}
        />
      </div>
    </div>
  );
}

// currentStyle?.photos.length > 0 ? currentStyle?.photos[0].url : '';

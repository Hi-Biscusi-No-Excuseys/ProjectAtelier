import React, { useState } from 'react';
import Image from './imagegallery/Image';

export default function ImageGallery({ currentStyle }) {
  const [expanded, setExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgSwitch = (smallImg, index) => {
    const main = document.getElementById('mainImg');
    main.src = smallImg.url;
    setCurrentIndex(index);
  };

  const expand = () => {
    if (!expanded) {
      document.getElementById('productImage').style.width = '850px';
      document.getElementById('productImage').style.height = '700px';
      setExpanded(!expanded);
    } else {
      document.getElementById('productImage').style.width = '850px';
      document.getElementById('productImage').style.height = '700px';
      setExpanded(!expanded);
    }
  };

  const right = () => {
    setCurrentIndex(currentIndex + 1);
    const main = document.getElementById('mainImg');
    main.src = currentStyle?.photos[currentIndex].url;
  };

  const left = () => {
    setCurrentIndex(currentIndex - 1);
    const main = document.getElementById('mainImg');
    main.src = currentStyle?.photos[currentIndex].url;
  };

  return (expanded
    ? (
      <div className="ImageGallery">
        <div className="scroll">
          {currentStyle?.photos.map((style, i) => <Image key={i} index={i} style={style} imgSwitch={imgSwitch} />)}
        </div>
        <div className="productImage" id="productImage">
          {currentIndex !== 0 ? <div className="leftarrow" onClick={left}>&#8678;</div> : <></>}
          {currentIndex !== currentStyle?.photos.length - 1 ? <div className="rightarrow" style={{ marginLeft: "150%" }} onClick={right}>&#8680;</div> : <></>}
          <img
            className="mainImg"
            id="mainImg"
            src={currentStyle?.photos[currentIndex].url}
            alt={currentStyle?.name}
            style={{
              position: 'relative',
              height: 750,
              width: 1400,
              zIndex: 1000,
            }}
            onClick={() => { expand(); }}
          />
        </div>
      </div>
    )
    : (
      <div className="ImageGallery">
        <div className="scroll">
          {currentStyle?.photos.map((style, i) => <Image key={i} index={i} style={style} imgSwitch={imgSwitch} currentIndex={currentIndex}/>)}
        </div>
        <div className="productImage" id="productImage">
          {currentIndex !== 0 ? <div className="leftarrow" onClick={left}>&#8678;</div> : <></>}
          {currentIndex !== currentStyle?.photos.length - 1 ? <div className="rightarrow" onClick={right}>&#8680;</div> : <></>}
          <img
            className="mainImg"
            id="mainImg"
            src={currentStyle?.photos[currentIndex].url}
            alt={currentStyle?.name}
            height="700"
            width="850"
            onClick={() => { expand(); }}
          />
        </div>
      </div>
    ));
}

// currentStyle?.photos.length > 0 ? currentStyle?.photos[0].url : '';

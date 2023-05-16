import React, { useState, useEffect } from 'react';
import Image from './imagegallery/Image';

export default function ImageGallery({ currentStyle }) {
  const [expanded, setExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const imgSwitch = (smallImg, index) => {
    const main = document.getElementById('mainImg');
    main.src = smallImg.url;
    setCurrentIndex(index);
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

  const expand = () => {
    if (!expanded) {
      document.getElementById('productImage').style.width = '850px';
      document.getElementById('productImage').style.height = '700px';
      setExpanded(true);
    } else {
      document.getElementById('productImage').style.width = '850px';
      document.getElementById('productImage').style.height = '700px';
      setExpanded(false);
      setZoomLevel(1);
    }
  }

  const zoom = () => {
    setZoomLevel(2.5);
  }

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    console.log(e.clientX, e.clientY);
  }

  const calculatePan = () => {
    const img = document.getElementById('zoomedImg');
    const imgRect = img?.getBoundingClientRect();
    const offsetX = ((mouseX - imgRect?.left) / imgRect?.width) * zoomLevel;
    const offsetY = ((mouseY - imgRect?.top) / imgRect?.height) * zoomLevel;
    const maxOffsetX = img?.naturalWidth / imgRect?.width - 1;
    const maxOffsetY = img?.naturalHeight / imgRect?.height - 1;
    const left = Math.min(offsetX * maxOffsetX) * 100;
    const top = Math.min(offsetY * maxOffsetY) * 100;
    return {left, top};
  };

  const panStyle = calculatePan();
  console.log(panStyle);

  return (expanded
    ? (
      <div className="ImageGallery">
        <div className="scroll">
          {currentStyle?.photos.map((style, i) => <Image key={i} index={i} style={style} imgSwitch={imgSwitch} />)}
        </div>
        { zoomLevel === 2.5 ?
        <div
        className="productImage"
        id="productImage"
        style={{overflow: 'hidden', position: 'relative'}}
        >
          <div className="reduceImage" onClick={() => { expand(); }}>Reduce</div>
          <img
            className="zoomedImg"
            id="zoomedImg"
            src={currentStyle?.photos[currentIndex].url}
            alt={currentStyle?.name}
            style={{
              position: 'absolute',
              height: 750,
              width: 1400,
              transform: `scale(${zoomLevel})`,
              left: `-${panStyle.left}%`,
              top: `-${panStyle.top}%`,
              zIndex: 1000,
            }}
            onClick={zoom}
            onMouseMove={handleMouseMove}
          />
        </div>
         :
         <div className="productImage" id="productImage">
         {currentIndex !== 0 ? <div className="leftarrow" onClick={left}>&#8678;</div> : <></>}
         {currentIndex !== currentStyle?.photos.length - 1 ? <div className="rightarrow" style={{ marginLeft: "150%" }} onClick={right}>&#8680;</div> : <></>}
         <div className="reduceImage" onClick={() => { expand(); }}>Reduce</div>
         <img
           className="expandedImg"
           id="expandedImg"
           src={currentStyle?.photos[currentIndex].url}
           alt={currentStyle?.name}
           style={{
             position: 'relative',
             height: 750,
             width: 1400,
             zIndex: 1000,
           }}
           onClick={zoom}
         />
       </div>
        }
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

import React, { useState } from 'react';
import Image from './imagegallery/Image';

export default function ImageGallery({ currentStyle }) {
  const [expanded, setExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  console.log(currentStyle);

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

  const leftarrow = () => {
    setCurrentIndex(currentIndex - 1);
    const main = document.getElementById('mainImg');
    main.src = currentStyle?.photos[currentIndex].url;
  };

  const expand = () => {
    if (!expanded) {
      document.getElementById('productImage').style.width = '1100px';
      document.getElementById('productImage').style.height = '733px';
      setExpanded(true);
    } else {
      document.getElementById('productImage').style.width = '1100px';
      document.getElementById('productImage').style.height = '733px';
      setExpanded(false);
      setZoomLevel(1);
    }
  };

  const zoom = () => {
    if (zoomLevel === 1) {
      setZoomLevel(2.5);
    } else {
      setZoomLevel(1);
    }
  };

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (expanded
    ? (
      <div className="ImageGallery" data-testid="imagegallery">
        <div className="expandedScroll">
          {currentStyle?.photos.map((style, i) => <Image key={i} index={i} style={style} imgSwitch={imgSwitch} currentIndex={currentIndex} expanded={expanded} zoomLevel={zoomLevel} />) }
        </div>
        { zoomLevel === 2.5
          ? (
            <div
              className="productImage"
              id="productImage"
              style={{ overflow: 'hidden', position: 'relative' }}
            >
              <img
                className="zoomedImg"
                id="mainImg"
                src={currentStyle?.photos[currentIndex].url}
                alt={currentStyle?.name}
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  transformOrigin: `${mouseX}px ${mouseY}px`,
                  transform: `scale(${zoomLevel})`,
                  zIndex: 1000,
                }}
                onClick={zoom}
                onMouseMove={handleMouseMove}
              />
            </div>
          )
          : (
            <div className="productImage" id="productImage">
              {currentIndex !== 0 ? <div className="leftarrow" onClick={leftarrow}>&#8678;</div> : <></>}
              {currentIndex !== currentStyle?.photos.length - 1 ? <div className="rightarrow" style={{ marginLeft: '140%' }} onClick={right}>&#8680;</div> : <></>}
              <div className="reduceImage" onClick={() => { expand(); }}>&#10006;</div>
              <img
                className="expandedImg"
                id="mainImg"
                src={currentStyle?.photos[currentIndex].url}
                alt={currentStyle?.name}
                style={{
                  position: 'relative',
                  height: '130%',
                  width: '150%',
                  zIndex: 1000,
                }}
                onClick={zoom}
              />
            </div>
          )}
      </div>
    )
    : (
      <div className="ImageGallery" data-testid="imagegallery">
        <div className="scroll">
          {currentStyle?.photos.map((style, i) => <Image key={i} index={i} style={style} imgSwitch={imgSwitch} currentIndex={currentIndex} expanded={expanded} />)}
        </div>
        <div className="productImage" id="productImage">
          {currentIndex !== 0 ? <div className="leftarrow" onClick={leftarrow}>&#8678;</div> : <></>}
          {currentIndex !== currentStyle?.photos.length - 1 ? <div className="rightarrow" onClick={right}>&#8680;</div> : <></>}
          <img
            className="mainImg"
            id="mainImg"
            src={currentStyle?.photos[currentIndex].url}
            alt={currentStyle?.name}
            height="100%"
            width="100%"
            onClick={() => { expand(); }}
          />
        </div>
      </div>
    ));
}

// currentStyle?.photos.length > 0 ? currentStyle?.photos[0].url : '';

{ /* <img
className="zoomedImg"
id="zoomedImg"
src={currentStyle?.photos[currentIndex].url}
alt={currentStyle?.name}
style={{
  position: 'absolute',
  height: 750,
  width: 1400,
  transformOrigin: `50%, 50%`,
  transform: `scale(${zoomLevel})`,
  left: `${-panStyle.left}%`,
  top: `${-panStyle.top}%`,
  zIndex: 1000,
}}
onClick={zoom}
onMouseMove={handleMouseMove}
/> */ }

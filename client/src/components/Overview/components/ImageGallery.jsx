import React from 'react';
import Image from './imagegallery/Image';

export default function ImageGallery({styles}) {

  const imgSwitch = (smallImg) => {
    const main = document.getElementById('mainImg');
    main.src = smallImg.src;
  }

  return (
    <div className="ImageGallery">
      <div>
        {styles.map((style, i)=>{
          return <Image key={i} style={style} imgSwitch={imgSwitch}/>
        })}
      </div>
      <div className="productImage">
        <img id='mainImg' src={styles[0]?.photos[0]?.url} alt={styles[0]?.name} height="500" width="500" onClick={(e)=>{
          console.log(e.target.src);
        }}/>
      </div>
    </div>
  );
}

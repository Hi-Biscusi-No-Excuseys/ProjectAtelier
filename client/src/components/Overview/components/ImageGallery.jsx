import React, {useState} from 'react';
import Image from './imagegallery/Image';

export default function ImageGallery({styles}) {

const [expanded, setExpanded] = useState(false);

  const imgSwitch = (smallImg) => {
    const main = document.getElementById('mainImg');
    main.src = smallImg.url;
  }

  const expand = () => {
    if (!expanded) {
      document.getElementById('productImage').style.width = '750px';
      document.getElementById('mainImg').style.height = '500px';
      document.getElementById('mainImg').style.width = '750px';
      setExpanded(!expanded);
    } else {
      document.getElementById('productImage').style.width = '500px';
      document.getElementById('mainImg').style.height = '500px';
      document.getElementById('mainImg').style.width = '500px';
      setExpanded(!expanded);
    }
  }

  return (
    <div className="ImageGallery">
      <div className="scroll">
        {styles[0]?.photos.map((style, i)=>{
          return <Image key={i} style={style} imgSwitch={imgSwitch}/>
        })}
      </div>
      <div className="productImage" id="productImage">
        <img className="mainImg" id='mainImg' src={styles[0]?.photos[0]?.url} alt={styles[0]?.name} height="500" width="500" />
        {!expanded ? <button className='expandButton' onClick={()=>{expand()}}>&#8680;</button> : <button className='expandButton' onClick={()=>{expand()}}>&#8678;</button>}

      </div>
    </div>
  );
}

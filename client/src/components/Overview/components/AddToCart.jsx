import React, {useState} from 'react';
import QuantitySelector from './addtocart/QuantitySelector';
import SizeSelector from './addtocart/SizeSelector';
import Add from './addtocart/Add';
import Favorite from './addtocart/Favorite';

export default function AddToCart({overview, styles, currentStyle}) {
  const [selectedSizeCount, setSelectedSizeCount] = useState(null);

  const handleSelectedSize = (size) => {
    setSelectedSizeCount(size);
  }

  return (
    <div className="addtocart">
      {/* <form onSubmit={(e)=>{e.preventDefault()}}> */}
        <SizeSelector currentStyle={currentStyle} overview={overview} handleSelectedSize={handleSelectedSize}/>
        <QuantitySelector styles={styles} currentStyle={currentStyle} overview={overview} selectedSizeCount={selectedSizeCount}/>
        <Add />
        <Favorite />
      {/* </form> */}
    </div>
  );
}

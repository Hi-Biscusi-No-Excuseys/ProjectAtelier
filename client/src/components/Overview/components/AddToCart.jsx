import React from 'react';
import QuantitySelector from './addtocart/QuantitySelector';
import SizeSelector from './addtocart/SizeSelector';
import Add from './addtocart/Add';
import Favorite from './addtocart/Favorite';

export default function AddToCart() {
  return (
    <div className="addtocart">
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <SizeSelector />
        <QuantitySelector />
        <Add />
        <Favorite />
      </form>
    </div>
  );
}

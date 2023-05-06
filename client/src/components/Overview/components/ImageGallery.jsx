import React from 'react';
import Image from './imagegallery/Image';

export default function ImageGallery({styles}) {
  return (
    <div className="ImageGallery">
      <Image styles={styles}/>
    </div>
  );
}

import React from 'react';
import star from './star.png';

export default function QuarterStars ({avg}) {
  const percentage = avg / 5 * 100; // convert avg to a percentage

  return (
    <div style={{ display: 'flex', direction: 'row', alignItems: 'center', width: '100px', position: 'relative' }}>

      {[...new Array(5)].map((arr, i) => (
        <img src={star} alt="" style={{width: '20px', zIndex: 999}} key={i}/>
      ))}
      

      <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${percentage}%`, backgroundColor: 'black' }}></div>

    </div>
  )
}

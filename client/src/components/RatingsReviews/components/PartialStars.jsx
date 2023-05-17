import React from 'react';
import star from './star.png';

export default function PartialStars({ avg }) {
  const percentage = (avg / 5) * 100; // convert avg to a percentage

  return (
    <span style={{
      display: 'inline-flex', direction: 'row', alignItems: 'center', width: '100px', position: 'relative',
    }}
    >

      {[...new Array(5)].map(() => (
        <img src={star} alt="empty star" style={{ width: '20px', zIndex: 999 }} />
      ))}

      <div style={{
        position: 'absolute', top: 0, left: 0, height: '100%', width: `${percentage}%`, backgroundColor: 'black',
      }}
      />

    </span>
  );
}

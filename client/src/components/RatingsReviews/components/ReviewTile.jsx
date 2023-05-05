import React from 'react';

export default function ReviewTile() {
  return (
    <div className='review-tile'>
      <span>★★★★★</span>
      <p>Summary</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ipsam commodi vel sint libero inventore ea aliquam id adipisci sed aperiam dolorum quis nostrum doloremque ab iure atque, quo eligendi.</p>

      <div id='tile-buttons'>
        <label htmlFor="helpful">Helpful?</label>
        <button name='helpful'>Yes</button>
        <button>Report</button>
      </div>
    </div>
  );
}

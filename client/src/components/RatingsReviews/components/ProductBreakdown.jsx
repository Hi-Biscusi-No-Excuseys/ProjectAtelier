import React from 'react';

export default function ProductBreakdown({characteristics}) {

  function decideLabels (charName) {
    if (charName === 'Size') {
      return (
      <>
        <p>Too Small</p>
        <p>Perfect</p>
        <p>Too Big</p>
      </>)
    } else if (charName === 'Width') {
      return (
        <>
          <p>Too Narrow</p>
          <p>Perfect</p>
          <p>Too Wide</p>
        </>)
    } else if (charName === 'Comfort') {
      return (
        <>
          <p>Poor</p>
          <p>Perfect</p>
        </>)
    } else if (charName === 'Quality') {
      return (
        <>
          <p>Poor</p>
          <p>Great</p>
        </>)
    } else if (charName === 'Length') {
      return (
        <>
          <p>Too Short</p>
          <p>Perfect</p>
          <p>Too Long</p>
        </>)
    } else {
      return (
        <>
          <p>Too Tight</p>
          <p>Perfect</p>
          <p>Too Loose</p>
        </>)
    }
  }

  return (

    <div id="product-breakdown">
      {
        Object.keys(characteristics).map((key, i) => {
          const left = (Math.round(characteristics[key].value * 10) / 10) * 40;

          return (
          <div className='char-container' key={characteristics[key].id}>
            <p className='char-name'>{key}</p>
              <span style={{ display: 'inline-flex', direction: 'row', alignItems: 'center', width: '200px', position: 'relative'}}>
                <span style={{ zIndex: 999, position: 'absolute', top: 0, left: left}}>|</span>
                <span style={{ height: '0.6rem', width: '100%', backgroundColor: '#d4d4d4', borderRadius: '6px'}}></span>
              </span>
            <div className='char-labels'>{decideLabels(key)}</div>
          </div>
        )})
      }
    </div>

  );
}

import React from 'react';

export default function ProductBreakdown({ characteristics }) {
  function decideLabels(charName) {
    if (charName === 'Size') {
      return (
        <>
          <p>1 Size Small</p>
          <p>Perfect</p>
          <p>1 Size Big</p>
        </>
      );
    } if (charName === 'Width') {
      return (
        <>
          <p>Too Narrow</p>
          <p>Perfect</p>
          <p>Too Wide</p>
        </>
      );
    } if (charName === 'Comfort') {
      return (
        <>
          <p>Poor</p>
          <p>Perfect</p>
        </>
      );
    } if (charName === 'Quality') {
      return (
        <>
          <p>Poor</p>
          <p>As Expected</p>
          <p>Great</p>
        </>
      );
    } if (charName === 'Length') {
      return (
        <>
          <p>Too Short</p>
          <p>Perfect</p>
          <p>Too Long</p>
        </>
      );
    }
    return (
      <>
        <p>Too Tight</p>
        <p>Perfect</p>
        <p>Too Loose</p>
      </>
    );
  }

  return (

    <div id="product-breakdown">
      {
        Object.keys(characteristics).map((key) => {
          const left = (Math.round(characteristics[key].value * 10) / 10) * 40;

          return (
            <div className="char-container" key={characteristics[key].id}>
              <p className="char-name">{key}</p>
              <span style={{
                display: 'inline-flex', direction: 'row', alignItems: 'center', width: '200px', position: 'relative',
              }}
              >
                <span style={{
                  zIndex: 999, position: 'absolute', bottom: 0, left,
                }}
                >
                  ▽
                </span>
                <span style={{
                  height: '0.6rem', width: '100%', backgroundColor: '#007185af', borderRadius: '6px',
                }}
                />
              </span>
              <div className="char-labels">{decideLabels(key)}</div>
            </div>
          );
        })
      }
    </div>

  );
}

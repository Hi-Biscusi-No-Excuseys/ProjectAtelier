import React from "react";

export default function StarBar ({percentage}) {

  let perc = Number.isNaN(percentage) ? 0 : percentage;

  return (
    <span style={{ display: 'inline-flex', direction: 'row', alignItems: 'center', width: '100px', position: 'relative'}}>
      <span style={{ height: '0.6rem', width: `${perc}%`, backgroundColor: 'green', zIndex: 999, borderRadius: '6px'}}></span>
      <span style={{ height: '0.6rem', width: '100%', backgroundColor: '#d4d4d4', position: 'absolute', top: 0, left: 0, borderRadius: '6px'}}></span>
    </span>
  )
}
import React from 'react';

const Canvas = () => {
  const viewBox = [window.innerWidth/-2, 100-window.innerHeight, window.innerWidth, window.innerHeight];

  return (
    <svg 
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <circle cx={0} cy={0} r={50} />
      <line x1={-400} y1={0} x2={400} y2={0} stroke="black" />
      <line y1={-400} x1={0} y2={400} x2={0} stroke="black" />
    </svg>
  )
}

export default Canvas;
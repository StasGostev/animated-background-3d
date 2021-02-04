import React from 'react'
import './Block.scss';

export const Block = ({delay, duration, cn}) => {
  const blockStyle = {
    // animationDuration: duration,
    animationDelay: delay
  }
  return (
    <div className={`block ${cn}`} style={blockStyle}>
      {console.log(cn)}
    </div>
  )
}

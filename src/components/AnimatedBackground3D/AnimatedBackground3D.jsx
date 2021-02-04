import React, { useEffect, useState } from 'react'
import { Block } from '../Block/Block';
import "./AnimatedBackground3D.scss";

const initOptopns = {
  //count is 400  ==> width(20 * 5vw) * height(20 * 5vh);
  count: 400, 
  blocks: [],
  className: ''
}

export const AnimatedBackground3D = () => {
  const [options, setOptopns] = useState(initOptopns);
  const randNumbers = (min, max) => {
    return min - 0.5 + Math.random() * (max - min + 1);
  } 
  const {count, blocks } = options;
  
  useEffect(() => {
    const collection = [];
    for(let i = 0; i < count; i++) {
      collection.push(<Block delay={`${randNumbers(1, 3)}s`} />)
    };
    setOptopns({...options, blocks: collection});
  }, []);

  return (
    <div className="animatedBackground3D">
      {blocks}
    </div>
  )
}

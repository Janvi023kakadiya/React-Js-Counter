import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  
  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const inc = () => {
    setCount(count + 1);
  };
 
  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button className="counter-btn decrement" onClick={dec}>-</button>
      <button className="counter-btn increment" onClick={inc}>+</button>
    </div>
  );
}

export default Counter;

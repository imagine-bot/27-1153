import React, { useState } from 'react';
import './CounterButton.css';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={incrementCount}>
        Count: {count}
      </button>
    </div>
  );
};

export default CounterButton;
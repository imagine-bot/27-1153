import { useState, useEffect } from 'react';
import axios from 'axios';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const updateCount = async () => {
      try {
        await axios.post('/api/updateCount', { count });
      } catch (error) {
        console.error(error);
      }
    };

    updateCount();
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Counter: {count}</h2>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={incrementCount}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
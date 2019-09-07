import React, { useState, useEffect } from "react";

const CounterTwo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count +1)}>
        Click Button 2
      </button>
    </div>
  );
}

export default CounterTwo;
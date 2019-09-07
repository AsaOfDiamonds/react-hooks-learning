import React, { useState } from "react";

const Counter = () => {

const [count, setCount] = useState(0);

return(
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
    Click me because it counts
    </button>
  </div>

);

}

export default Counter;
import React, { useState } from "react";

// const Counter = () => {

// const [count, setCount] = useState(0);

// return(
//   <div>
//     <p>You clicked {count} times</p>
//     <button onClick={() => setCount(count + 1)}>
//     Click me because it counts
//     </button>
//   </div>

// );

// }

// export default Counter;

// Same counter written as a Class
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return(
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count +1 })}>
          Click me cause class counts
        </button>
      </div>
    );
  }

}

export default Counter;
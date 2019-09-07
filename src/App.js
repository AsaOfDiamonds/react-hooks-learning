import React from 'react';
import Counter from "./components/Counter";
import EffectHook from "./components/EffectHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <EffectHook />
      </header>
    </div>
  );
}

export default App;

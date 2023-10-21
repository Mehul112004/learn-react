import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const addVal = () => {
    // count++;
    setCount(++count);
    setCount(++count);
    setCount(++count);
    setCount(++count);
  };
  const decVal=()=>{
    // count--;
    setCount(--count);
  }
  return (
    <>
      <h1>This is my first counter webApp</h1>
      <h2>Counter Value : {count}</h2>

      <button onClick={addVal}>Add Value</button>
      <button onClick={decVal}>Decrease Value</button>
    </>
  );
}

export default App;

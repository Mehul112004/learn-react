import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCounter] = useState(0);

  // let count=5

  function addValue() {
    setCounter(count + 1);
  }
  const decValue = () => {
    if (count >= 1) {
      console.log(count);
      setCounter(count - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value :{count} </h2>
      <button onClick={addValue}>Add Value{count}</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease Value {count}</button>
    </>
  );
}
export default App;

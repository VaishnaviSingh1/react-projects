import { useState } from "react";
import "./App.css";
function App() {
  const[count,setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount
    (count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return(
    <div className="Container">
      <h1 className="heading">Counter App</h1>
      <h2 className="count">{count}</h2>
      <div className="btn-container">
        <button className="btn" onClick={increment}>Increment</button>
        <button className="btn" onClick={decrement}>Decrement</button>
        <button className="btn" onClick={reset}>Reset</button>
        </div>
    </div>
  )

}
export default App;
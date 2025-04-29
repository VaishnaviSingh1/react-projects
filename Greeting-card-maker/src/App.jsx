import { useState } from "react";
function App() {
  const[inputname, setInputName] = useState("");
  const[greetname, setGreetName] = useState("");
  const handleChange=(e)=>{
    setInputName(e.target.value);
  }
  const handleClick=()=>{
    setGreetName(inputname);
    setInputName("");
  }
  return(
        <div>
      <h1>Greeting Card Maker</h1>
      <input type="text" onChange={handleChange} value={inputname} placeholder="Enter Your Name"></input>
      <button onClick={handleClick}>Generate card</button>
      {greetname&&<h2>Hello,{greetname}</h2>}
    </div>
  );
}
export default App;
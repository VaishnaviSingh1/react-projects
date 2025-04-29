import { useState } from "react";
function App() {
  const[message, setMessage] = useState("");
  const[messageList, setMessageList] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

    const handleSubmit = ()=>{
      if(message.trim()!==""){
        setMessageList([...messageList,message]);
        setMessage("");

      }
    };
      const handleDelete=(index)=>{
        const newList=messageList.filter((_,i)=>i!==index);
        setMessageList(newList);
      }

      

  return(
    <div>
      <h1>Message Board</h1>
      <input placeholder="Type your message here" onChange={handleChange} value={message} />
      <button onClick={handleSubmit}>Post</button>
      <div>
        {messageList.map((msg,index)=>(
          <p key={index}>.
            {msg}
          <button onClick={()=>handleDelete(index)}>Delete</button>
          </p>
        ))}

      </div>
      
      

    </div>
  );
}
export default App;
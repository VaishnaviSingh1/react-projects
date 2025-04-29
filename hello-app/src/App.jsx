import { useState } from "react";
function App() {
    const[name, setName] = useState("Vaishnavi");
    // const changeName=()=>{
    //     setName("Divya");
    // };

    const toggel=()=>{
        if(name==='Vaishnavi'){
            setName('Divya');
        }
        else{
            setName('Vaishnavi');
        }
    }

    const reset=()=>{
        setName('Vaishnavi');
    };

    return(
        <div>
            <h1>Hello,{name}</h1>
            <button onClick={toggel}>Change Name</button>
            <button onClick={reset} style={{marginLeft:'10px'}}>Reset</button>
        </div>
    );
}
export default App;
import { useState } from "react";
function GreetingCard(props){
    const[visible, setVisible] = useState(true);
    const handleClick = () => {
        setVisible(!visible);
    };

    return(
        <div>
            {visible && <h2>Hello,{props.name}</h2>}
            <button onClick={handleClick}> {visible ? "Hide":"show"} Greeting</button>

        </div>
    );

}
export
default GreetingCard;
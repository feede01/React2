import "./button.css"
import { useState } from "react";

function Button(props){

    const [colorButton, setColorButton] = useState(props.color);
    const styleBtn =  {backgroundColor: colorButton}
    
    return <button onClick={props.onButtonTouch} style={styleBtn} className="btn">{props.children || props.text}</button>
}

export default Button;
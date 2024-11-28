import React from "react";
import "./Button.scss";

function Button({text, onClick, width, height="32", className, type="button"}) {

    
    return (
        <button 
        width={width} 
        height={height}   
        type={type}
        className={`button ${className}`}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;
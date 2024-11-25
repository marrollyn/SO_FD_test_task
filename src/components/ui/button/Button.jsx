import React from "react";

function Button({text, onClick, width, height="32", className}) {

    
    return (
        <button 
        width={width} 
        height={height}   
        className={`button ${className}`}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;
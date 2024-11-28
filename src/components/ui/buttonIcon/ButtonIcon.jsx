import React from "react";
import "./ButtonIcon.scss"


function ButtonIcon({children, onClick = () => {}, width="20", height="20", color="var(--icon-dflt-clr)", className, type="button"}) {

    if (!React.isValidElement(children)) {
        console.error("ButtonIcon expects a valid React element as a child.");
        return null; 
    }
    
    return (
        <button 
            type={type}
            className={`button-icon ${className}`}
            onClick={onClick}>
            {React.cloneElement(children, {
                className: "button-icon__icon",
                width: width,
                height: height,
                fill: children.props.fill || color,
            })}
        </button>
    )
}

export default ButtonIcon;
import React from "react";
import "./Input.scss";

function Input({ label, placeholder, inputValue, classNameBox, classNameInput, classNameLbl, children }) {

    return (
        <div className={`input-box ${classNameBox}`}>
            {label && <label className={`input-label ${classNameLbl}`}>{label}</label>}
            <input
                onChange={()=>{}}
                className={`input ${classNameInput}`}
                type="text"
                placeholder={placeholder}
                value={inputValue} 
                />
                
            {children}
        </div>
    )
}

export default Input;
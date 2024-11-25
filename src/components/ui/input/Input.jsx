import React from "react";
import "./Input.scss";

function Input({ placeholder, inputValue, classNameBox, classNameInput, children }) {

    return (
        <div className={`input-box ${classNameBox}`}>
            <input
                className={`input ${classNameInput}`}
                type="text"
                placeholder={placeholder}
                value={inputValue}/>
                {children}
        </div>
    )
}

export default Input;
import React from "react";
import Button from "../button/Button";
import "./FormBtn.scss"

function FormBtn({onClick, className}) {

    return(
        <div className={`form-header__title-btns form-header__title-btns-${className}`}>
                    <Button
                        text="Сохранить"
                        className="button-primary"
                        onClick={()=>{}} 
                        type="submit"/>
                    <Button
                        text="Сохранить и выйти"
                        className="button-general"
                        onClick={onClick} />
                </div>
    )
}

export default FormBtn;
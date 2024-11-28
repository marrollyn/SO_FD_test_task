import React from "react";
import Input from "../../ui/input/Input";
import ButtonIcon from "../../ui/buttonIcon/ButtonIcon";
import { ReactComponent as DateFieldIcon } from "../../../assets/icons/calendar_icon.svg"
import "./DateField.scss"

function DateField({label, inputValue, classNameBox, classNameInput, classNameLbl, classNameBtn, name}) {
    return (
    <div className={`form-item__date form-item__${name}`}>
        <div className="form-item__date__content-box">
            <Input
                label={label}
                inputValue={inputValue}
                classNameBox={classNameBox}
                classNameInput={classNameInput}
                classNameLbl={classNameLbl}
            /></div>
        <ButtonIcon className={classNameBtn}>
            <DateFieldIcon />
        </ButtonIcon>
    </div>
    )
}

export default DateField;
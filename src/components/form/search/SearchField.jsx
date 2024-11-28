import React from "react";
import Input from "../../ui/input/Input";
import ButtonIcon from "../../ui/buttonIcon/ButtonIcon";
import { ReactComponent as SearchFieldIcon } from "../../../assets/icons/search_icon.svg"
import "./SearchField.scss";

function SearchField({ label, inputValue, classNameBox, classNameInput, classNameLbl, classNameBtn, name }) {
    return (
        <div className={`form-item__search-input form-item__${name}`}>
            <div className="form-item__search-input__content-box">
            <Input
                label={label}
                inputValue={inputValue}
                classNameBox={classNameBox}
                classNameInput={classNameInput}
                classNameLbl={classNameLbl}
            /></div>
            <ButtonIcon className={classNameBtn}>
                <SearchFieldIcon />
            </ButtonIcon>
        </div>
    )
}

export default SearchField;
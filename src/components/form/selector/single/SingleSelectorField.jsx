import React from "react";
import ButtonIcon from "../../../ui/buttonIcon/ButtonIcon";
import { ReactComponent as SearchFieldIcon } from "../../../../assets/icons/search_icon.svg"
import { ReactComponent as AddFieldIcon } from "../../../../assets/icons/add_icon.svg"
import { ReactComponent as ClearFieldIcon } from "../../../../assets/icons/clear-btn_icon.svg"
import "./SingleSelectorField.scss";

function SingleSelectorField({ label, inputValue, placeholder, classNameBox, classNameLbl, name }) {

    return (
        <div className={`form-item__select-single form-item__${name}`}>
            <div className={`input-label select-single__label ${classNameLbl}`}>{label}</div>
            <div className={`select-single__input-box ${classNameBox}`}>
                <div className="select-single__input-content-box">
                    <div className="select-single__input__item-box" >
                        <p className="select-single__input-item">{inputValue}</p>
                    </div>
                    <ButtonIcon className="select-single__input-cls-btn" width={16} height={16}>
                        <ClearFieldIcon fill="var(--icon-dsbl-clr)" />
                    </ButtonIcon>
                </div>
                <div className="select-single__btn-box" >
                    <ButtonIcon className="select-single__button" width={16} height={16}>
                        <AddFieldIcon />
                    </ButtonIcon>
                    <ButtonIcon className="select-single__button" width={16} height={16}>
                        <SearchFieldIcon />
                    </ButtonIcon>
                </div>
            </div>
            {inputValue.length === 0 && <span className="select-single__placeholder">{placeholder}</span>}
        </div>

    )

}

export default SingleSelectorField;
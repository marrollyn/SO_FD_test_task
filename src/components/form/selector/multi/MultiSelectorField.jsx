import React from "react";
import "./MultiSelectorField.scss";
import ButtonIcon from "../../../ui/buttonIcon/ButtonIcon";
import { ReactComponent as DeletedIcon } from "../../../../assets/icons/delete_icon.svg"
import { ReactComponent as ClearFieldIcon } from "../../../../assets/icons/clear-btn_icon.svg"
import { ReactComponent as SearchFieldIcon } from "../../../../assets/icons/search_icon.svg"
import { ReactComponent as AddFieldIcon } from "../../../../assets/icons/add_icon.svg"

function MultiSelectorField({ name, inputValue, placeholder, label, classNameBox, classNameLbl, classNameBtn }) {

    return (
        <div className={`form-item__select-multi form-item__${name}`}>
            <div className={`input-label select-multi__label ${classNameLbl}`}>{label}</div>
            <div className={`select-multi__input-box ${classNameBox}`}>
                <div className="select-multi__input-content-box">
                    {inputValue.map((item, index) => (
                        <div key={index} className="select-multi__input__item-box" >
                            <p className="select-multi__input-item">{item}</p>
                            <ButtonIcon className={`select-multi__item-button ${classNameBtn}`} width={12} height={12}>
                                <DeletedIcon />
                            </ButtonIcon>
                        </div>
                    ))}
                    <ButtonIcon className="select-multi__input-cls-btn" width={16} height={16}>
                        <ClearFieldIcon fill="var(--icon-dsbl-clr)" />
                    </ButtonIcon>
                </div>
                <div className="select-multi__btn-box" >
                    <ButtonIcon className="select-multi__button" width={16} height={16}>
                        <AddFieldIcon />
                    </ButtonIcon>
                    <ButtonIcon className="select-multi__button" width={16} height={16}>
                        <SearchFieldIcon />
                    </ButtonIcon>
                </div>
            </div>
            {inputValue.length === 0 && <span className="select-multi__placeholder">{placeholder}</span>}
        </div>
    )


}

export default MultiSelectorField;
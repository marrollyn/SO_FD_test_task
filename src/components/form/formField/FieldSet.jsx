import React from "react";
import Input from "../../ui/input/Input";
import DateField from "../date/DateField";
import SearchField from "../search/SearchField";
import SingleSelectorField from "../selector/single/SingleSelectorField";
import MultiSelectorField from "../selector/multi/MultiSelectorField";

function FormField({ type, name, label, inputValue, classNameBox, classNameInput, classNameLbl, classNameBtn }) {

    const renderField = () => {
        switch (type) {
            case 'text':
                return (
                    <div className={`form-item__text form-item__${name}`}>
                        <Input
                            label={label}
                            inputValue={inputValue}
                            classNameBox={classNameBox}
                            classNameInput={classNameInput}
                            classNameLbl={classNameLbl}
                        /></div>);
            case 'date':
                return (<DateField
                    label={label}
                    inputValue={inputValue}
                    classNameBox={classNameBox}
                    classNameInput={classNameInput}
                    classNameLbl={classNameLbl}
                    classNameBtn={classNameBtn}
                    name={name}
                />);
            case 'search':
                return (<SearchField
                    label={label}
                    inputValue={inputValue}
                    classNameBox={classNameBox}
                    classNameInput={classNameInput}
                    classNameLbl={classNameLbl}
                    classNameBtn={classNameBtn}
                    name={name}
                />);
            case 'single-selector':
                return (<SingleSelectorField
                    label={label}
                    inputValue={inputValue}
                    classNameBox={classNameBox}
                    classNameInput={classNameInput}
                    classNameLbl={classNameLbl}
                    classNameBtn={classNameBtn}
                    name={name}
                />);
            case 'multi-selector':
                return (<MultiSelectorField
                    label={label}
                    inputValue={inputValue}
                    classNameBox={classNameBox}
                    classNameInput={classNameInput}
                    classNameLbl={classNameLbl}
                    classNameBtn={classNameBtn}
                    name={name}
                />);
            default:
                return null;
        }
    };

    return (
        renderField()
    );


}

export default FormField;
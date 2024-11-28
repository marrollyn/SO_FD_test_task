import React from "react";
import FormField from "./formField/FieldSet.jsx";

function Form({data, title, id, onSubmit, onChange}) {

    return (
        <form
            id={id}
            className="form"
            onSubmit={() => { }}
            onChange={() => { }}
        >
            <h1 className="form__title">{title}</h1>
            <div className="form__fields">
                {data.map((field) => (
                    <FormField
                        key={field.name}
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        inputValue={field.initialValue}
                        classNameBox=""
                        classNameInput=""
                        classNameLbl={field.required ? "label-required-item" : ""}
                        classNameBtn=""
                    />
                ))}
            </div>
        </form>
    )
}

export default Form;
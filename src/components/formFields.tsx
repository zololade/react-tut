// import { Fragment } from "react/jsx-runtime";

import type { FormConfig, State, UserData } from "../types/types";
type FieldProp = {
  fields: FormConfig[];
  formStateMod: UserData["formStateMod"];
  formState: State;
};

function FormFields({ fields, formStateMod, formState }: FieldProp) {
  return (
    <>
      {/* Loop through the array to generate labels and inputs dynamically */}
      {fields.map((field) => (
        <div key={field.id} className={`field-item ${field.halfWidth ? "half-width" : ""}`}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            name={field.name}
            value={formState[field.name]}
            autoComplete={field.autoComplete ? field.autoComplete : "off"}
            placeholder={field.placeholder}
            required={field.required}
            onChange={formStateMod}
          />
        </div>
      ))}
    </>
  );
}

export { FormFields };

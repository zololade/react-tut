// import { Fragment } from "react/jsx-runtime";

import type { FormConfig, UserData } from "../types/types";
type FieldProp = {
  fields: FormConfig[];
  formStateMod: UserData["formStateMod"];
};

function FormFields({ fields, formStateMod }: FieldProp) {
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

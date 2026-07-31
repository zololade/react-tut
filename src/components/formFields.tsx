import { Fragment } from "react/jsx-runtime";

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
        <Fragment key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            name={field.name}
            autoComplete={field.autoComplete ? field.autoComplete : "off"}
            placeholder={field.placeholder}
            required={field.required ? true : false}
            onChange={formStateMod}
          />
        </Fragment>
      ))}
    </>
  );
}

export { FormFields };

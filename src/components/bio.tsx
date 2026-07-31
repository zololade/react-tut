import { Fragment } from "react/jsx-runtime";

import { BIO_FIELDS } from "../data/bioFields";
import type { UserData } from "../types/types";

function Bio({ formStateMod }: Pick<UserData, "formStateMod">) {
  return (
    <fieldset className="bio" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Personal details</h2>
      <hr />

      {/* Loop through the array to generate labels and inputs dynamically */}
      {BIO_FIELDS.map((field) => (
        <Fragment key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            name={field.name}
            autoComplete={field.autoComplete}
            placeholder={field.placeholder}
            required={field.required ? true : false}
            onChange={formStateMod}
          />
        </Fragment>
      ))}
    </fieldset>
  );
}

export { Bio };

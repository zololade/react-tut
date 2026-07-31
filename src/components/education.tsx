import { Fragment } from "react/jsx-runtime";

import { EDU_FIELDS } from "../data/educationField";
import type { UserData } from "../types/types";
import { DropDownBtn } from "./form";

function Education({ visibility, showBtn, formStateMod }: UserData) {
  return (
    <fieldset className="edu" aria-labelledby="education-heading">
      <div className="header-group">
        <h2 id="education-heading">Education</h2>
        <DropDownBtn showBtn={showBtn} />
      </div>
      <hr />

      {visibility.edu ? (
        <>
          {EDU_FIELDS.map((field) => (
            <Fragment key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                onChange={formStateMod}
              />
            </Fragment>
          ))}
        </>
      ) : (
        ""
      )}
    </fieldset>
  );
}

export { Education };

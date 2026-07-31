import { Fragment } from "react/jsx-runtime";

import { EXP_FIELDS } from "../data/experienceField";
import type { UserData } from "../types/types";
import { DropDownBtn } from "./form";

function Experience({ visibility, showBtn, formStateMod }: UserData) {
  return (
    <fieldset className="exp" aria-labelledby="experience-heading">
      <div className="header-group">
        <h2 id="experience-heading">Experience</h2>
        <DropDownBtn showBtn={showBtn} />
      </div>
      <hr />

      {visibility.exp ? (
        <>
          {EXP_FIELDS.map((field) => (
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

          <label htmlFor="Description">Description: </label>
          <textarea
            id="Description"
            name="expDesc"
            placeholder="Enter Description"
            onChange={formStateMod}
          ></textarea>
        </>
      ) : (
        ""
      )}
    </fieldset>
  );
}

export { Experience };

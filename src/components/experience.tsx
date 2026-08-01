import { EXP_FIELDS } from "../data/experienceField";
import type { UserData } from "../types/types";
import { DropDownBtn } from "./form";
import { FormFields } from "./formFields";

function Experience({ visibility, showBtn, formStateMod, formState }: UserData) {
  return (
    <fieldset className="exp" aria-labelledby="experience-heading">
      <div className="header-group">
        <h2 id="experience-heading">Experience</h2>
        <DropDownBtn showBtn={showBtn} />
      </div>

      {visibility.exp ? (
        <>
          <hr />
          <FormFields fields={EXP_FIELDS} formStateMod={formStateMod} formState={formState} />
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

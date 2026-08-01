import { EDU_FIELDS } from "../data/educationField";
import type { UserData } from "../types/types";
import { DropDownBtn } from "./form";
import { FormFields } from "./formFields";

function Education({ visibility, showBtn, formStateMod, formState }: UserData) {
  return (
    <fieldset className="edu" aria-labelledby="education-heading">
      <div className="header-group">
        <h2 id="education-heading">Education</h2>
        <DropDownBtn showBtn={showBtn} />
      </div>

      {visibility.edu ? (
        <>
          <hr />
          <FormFields fields={EDU_FIELDS} formStateMod={formStateMod} formState={formState} />
        </>
      ) : (
        ""
      )}
    </fieldset>
  );
}

export { Education };

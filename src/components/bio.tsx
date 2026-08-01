import { BIO_FIELDS } from "../data/bioFields";
import type { UserData } from "../types/types";
import { FormFields } from "./formFields";

function Bio({ formStateMod, formState }: Pick<UserData, "formStateMod" | "formState">) {
  return (
    <fieldset className="bio" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Personal details</h2>
      <hr />
      <FormFields fields={BIO_FIELDS} formStateMod={formStateMod} formState={formState} />
    </fieldset>
  );
}

export { Bio };

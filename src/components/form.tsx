import { useState } from "react";

import type { FormProp, visibility } from "../types/types";
import { Bio } from "./bio";
import { Education } from "./education";
import { Experience } from "./experience";

function SubmitBtn() {
  return <button type="submit">Submit</button>;
}

function Form({ handleSubmit }: FormProp) {
  const [submitVisibility, setSubmitVisibility] = useState<visibility>({ edu: false, exp: false });

  function updateVisibility(val: visibility) {
    setSubmitVisibility(val);
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <Bio btnVisibility={submitVisibility} />
      <Education btnVisibility={submitVisibility} showBtn={updateVisibility} />
      <Experience btnVisibility={submitVisibility} showBtn={updateVisibility} />
    </form>
  );
}

export { Form, SubmitBtn };

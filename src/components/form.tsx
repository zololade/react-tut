import type React from "react";

import { Bio } from "./bio";
import { Education } from "./education";

interface FormProp {
  handleSubmit: React.SubmitEventHandler;
}

function Form({ handleSubmit }: FormProp) {
  return (
    <form action="#" onSubmit={handleSubmit}>
      <Bio />
      <Education />
      <button type="submit">Submit</button>
    </form>
  );
}

export { Form };

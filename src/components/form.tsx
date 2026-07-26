import type React from "react";

import { Bio } from "./bio";
import { Education } from "./education";
import { Experience } from "./experience";

interface FormProp {
  handleSubmit: React.SubmitEventHandler;
}

function SubmitBtn() {
  return <button type="submit">Submit</button>;
}

function Form({ handleSubmit }: FormProp) {
  return (
    <form action="#" onSubmit={handleSubmit}>
      <Bio />
      <Education />
      <Experience />
    </form>
  );
}

export { Form, SubmitBtn };

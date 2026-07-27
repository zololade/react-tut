import { useState } from "react";

import type { FormProp, visibility } from "../types/types";
import { Bio } from "./bio";
import { Education } from "./education";
import { Experience } from "./experience";

function SubmitBtn() {
  return <button type="submit">Submit</button>;
}

function DropDownBtn({ showBtn }: { showBtn: () => void }) {
  const [rotate, setRotate] = useState(false);
  function handleShow() {
    showBtn();
    setRotate(!rotate);
  }

  return (
    <button type="button" className={rotate ? "dropBtn active" : "dropBtn"} onClick={handleShow}>
      <span className="material-symbols-outlined">arrow_drop_down</span>
    </button>
  );
}

function Form({ handleSubmit }: FormProp) {
  const [submitVisibility, setSubmitVisibility] = useState<visibility>({ edu: false, exp: false });

  function updateVisibility(val: visibility) {
    setSubmitVisibility(val);
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <Bio btnVisibility={submitVisibility} />
      <Education
        btnVisibility={submitVisibility}
        showBtn={() => updateVisibility({ ...submitVisibility, edu: !submitVisibility.edu })}
      />
      <Experience
        btnVisibility={submitVisibility}
        showBtn={() => updateVisibility({ ...submitVisibility, exp: !submitVisibility.exp })}
      />
    </form>
  );
}

export { Form, SubmitBtn, DropDownBtn };

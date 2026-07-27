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
  const [visibility, setVisibility] = useState<visibility>({ edu: false, exp: false });

  function updateVisibility(val: visibility) {
    setVisibility(val);
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <Bio />
      <Education
        visibility={visibility}
        showBtn={() => updateVisibility({ ...visibility, edu: !visibility.edu })}
      />
      <Experience
        visibility={visibility}
        showBtn={() => updateVisibility({ ...visibility, exp: !visibility.exp })}
      />

      {/* <SubmitBtn /> */}
    </form>
  );
}

export { Form, SubmitBtn, DropDownBtn };

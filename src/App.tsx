import "./styles.css";
import { useState, type SubmitEvent } from "react";

import { Bio } from "./components/bio";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Form } from "./components/form";
import { Preview } from "./components/preview";
import { SubmitBtn } from "./components/submitBtn";
import { initialData } from "./data/userData";
import type { ChangeType, State, Visibility } from "./types/types";

export default function App() {
  const [visibility, setVisibility] = useState<Visibility>({ edu: false, exp: false });
  const [formState, setFormState] = useState<State>(initialData);

  function formStateMod(e: ChangeType) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  }

  function updateVisibility(val: Visibility) {
    setVisibility(val);
  }

  return (
    <>
      <Form handleSubmit={handleSubmit}>
        <Bio formStateMod={formStateMod} />
        <Education
          visibility={visibility}
          showBtn={() => updateVisibility({ ...visibility, edu: !visibility.edu })}
          formStateMod={formStateMod}
        />
        <Experience
          visibility={visibility}
          showBtn={() => updateVisibility({ ...visibility, exp: !visibility.exp })}
          formStateMod={formStateMod}
        />
        <SubmitBtn />
      </Form>
      <Preview formState={formState} />
    </>
  );
}

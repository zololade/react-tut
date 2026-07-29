// import { useState, useEffect } from "react";

import "./styles.css";
import { useState, type ChangeEvent, type SubmitEvent } from "react";

import { Form } from "./components/form";
import { Preview } from "./components/preview";
import type { State } from "./types/types";

export default function App() {
  const [formState, setFormState] = useState<State>({
    name: "",
    email: "",
    phone: "",
    address_line1: "",
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    company: "",
    position: "",
    expStartDate: "",
    expEndDate: "",
    expLocation: "",
    expDesc: "",
  });

  function formStateMod(e: ChangeEvent<HTMLInputElement>) {
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

  return (
    <>
      <Form handleSubmit={handleSubmit} formState={formState} formStateMod={formStateMod} />
      <Preview formState={formState} />
    </>
  );
}

// import { useState, useEffect } from "react";
import type React from "react";

import "./styles.css";
import { Form } from "./components/form";

export default function App() {
  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
    </>
  );
}

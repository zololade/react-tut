// import { useState, useEffect } from "react";
import type React from "react";

import "./styles.css";
import { Form } from "./components/form";

export default function App() {
  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
    </>
  );
}

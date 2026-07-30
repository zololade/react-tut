import { useState } from "react";

import type { FormProp } from "../types/types";

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

function Form({ handleSubmit, children }: FormProp) {
  return (
    <form action="#" onSubmit={handleSubmit}>
      <>{children}</>
    </form>
  );
}

export { Form, DropDownBtn };

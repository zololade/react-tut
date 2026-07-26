import { useState } from "react";

import type { visibility } from "../types/types";
import { SubmitBtn } from "./form";

function Education({
  btnVisibility,
  showBtn,
}: {
  btnVisibility: visibility;
  showBtn: (val: visibility) => void;
}) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
    showBtn({ ...btnVisibility, edu: !btnVisibility.edu });
  }

  return (
    <fieldset className="edu" aria-labelledby="education-heading">
      <div className="header-group">
        <h2 id="education-heading">Education</h2>
        <button type="button" onClick={handleShow}>
          show
        </button>
      </div>
      <hr />

      {show ? (
        <>
          <label htmlFor="school">School: </label>
          <input type="text" id="school" placeholder="Enter School" />

          <label htmlFor="degree">Degree: </label>
          <input type="text" id="degree" placeholder="Enter Degree" />

          <div className="date-group">
            <div className="date-item">
              <label htmlFor="start-date">Start Date: </label>
              <input type="date" id="start-date" placeholder="Start Date" />
            </div>

            <div className="date-item">
              <label htmlFor="end-date">End Date: </label>
              <input type="date" id="end-date" placeholder="End Date" />
            </div>
          </div>

          <label htmlFor="location">Location: </label>
          <input type="text" id="location" placeholder="Delicious, City"></input>
        </>
      ) : (
        ""
      )}

      {btnVisibility.edu === true ? <SubmitBtn /> : ""}
    </fieldset>
  );
}

export { Education };

import { useState } from "react";

import type { visibility } from "../types/types";
import { SubmitBtn } from "./form";

function Experience({
  btnVisibility,
  showBtn,
}: {
  btnVisibility: visibility;
  showBtn: (val: visibility) => void;
}) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
    showBtn({ ...btnVisibility, exp: !btnVisibility.exp });
  }

  return (
    <fieldset className="exp" aria-labelledby="experience-heading">
      <div className="header-group">
        <h2 id="experience-heading">Experience</h2>
        <button type="button" onClick={handleShow}>
          show
        </button>
      </div>
      <hr />

      {show ? (
        <>
          <label htmlFor="company">Company Name: </label>
          <input type="text" id="company" placeholder="Enter Company Name" />

          <label htmlFor="position">Position Title: </label>
          <input type="text" id="position" placeholder="Enter Position Title" />

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

          <label htmlFor="Description">Description: </label>
          <textarea id="Description" placeholder="Enter Description"></textarea>
        </>
      ) : (
        ""
      )}

      {btnVisibility.exp === true ? <SubmitBtn /> : ""}
    </fieldset>
  );
}

export { Experience };

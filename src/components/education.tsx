import type { visibility } from "../types/types";
import { SubmitBtn } from "./form";

function Education({ btnVisibility, showBtn }: { btnVisibility: visibility; showBtn: () => void }) {
  function handleShow() {
    showBtn();
  }

  return (
    <fieldset className="edu" aria-labelledby="education-heading">
      <div className="header-group">
        <h2 id="education-heading">Education</h2>
        <button type="button" onClick={handleShow}>
          show
        </button>
      </div>

      {btnVisibility.edu ? (
        <>
          <hr />
          <label htmlFor="school">School: </label>
          <input type="text" id="school" name="school" placeholder="Enter School" />

          <label htmlFor="degree">Degree: </label>
          <input type="text" id="degree" name="degree" placeholder="Enter Degree" />

          <div className="date-group">
            <div className="date-item">
              <label htmlFor="start-date">Start Date: </label>
              <input type="date" id="start-date" name="startDate" placeholder="Start Date" />
            </div>

            <div className="date-item">
              <label htmlFor="end-date">End Date: </label>
              <input type="date" id="end-date" name="endDate" placeholder="End Date" />
            </div>
          </div>

          <label htmlFor="location">Location: </label>
          <input type="text" id="location" name="location" placeholder="Delicious, City"></input>
        </>
      ) : (
        ""
      )}

      {btnVisibility.edu && !btnVisibility.exp ? <SubmitBtn /> : ""}
    </fieldset>
  );
}

export { Education };

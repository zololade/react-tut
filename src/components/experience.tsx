import type { visibility } from "../types/types";
import { DropDownBtn, SubmitBtn } from "./form";

function Experience({
  btnVisibility,
  showBtn,
}: {
  btnVisibility: visibility;
  showBtn: () => void;
}) {
  return (
    <fieldset className="exp" aria-labelledby="experience-heading">
      <div className="header-group">
        <h2 id="experience-heading">Experience</h2>
        <DropDownBtn showBtn={showBtn} />
      </div>

      {btnVisibility.exp ? (
        <>
          <hr />
          <label htmlFor="company">Company Name: </label>
          <input type="text" id="company" name="company" placeholder="Enter Company Name" />

          <label htmlFor="position">Position Title: </label>
          <input type="text" id="position" name="position" placeholder="Enter Position Title" />

          <div className="date-group">
            <div className="date-item">
              <label htmlFor="start-date">Start Date: </label>
              <input type="date" id="start-date" name="expStartDate" placeholder="Start Date" />
            </div>

            <div className="date-item">
              <label htmlFor="end-date">End Date: </label>
              <input type="date" id="end-date" name="expEndDate" placeholder="End Date" />
            </div>
          </div>

          <label htmlFor="location">Location: </label>
          <input type="text" id="location" name="expLocation" placeholder="Delicious, City"></input>

          <label htmlFor="Description">Description: </label>
          <textarea id="Description" name="expDesc" placeholder="Enter Description"></textarea>
        </>
      ) : (
        ""
      )}

      {btnVisibility.exp ? <SubmitBtn /> : ""}
    </fieldset>
  );
}

export { Experience };

import type { UserData } from "../types/types";
import { DropDownBtn } from "./form";

function Education({ visibility, showBtn, formStateMod }: UserData) {
  return (
    <fieldset className="edu" aria-labelledby="education-heading">
      <div className="header-group">
        <h2 id="education-heading">Education</h2>
        <DropDownBtn showBtn={showBtn} />
      </div>
      <hr />

      {visibility.edu ? (
        <>
          <label htmlFor="school">School: </label>
          <input
            type="text"
            id="school"
            name="school"
            placeholder="Enter School"
            onChange={formStateMod}
          />

          <label htmlFor="degree">Degree: </label>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="Enter Degree"
            onChange={formStateMod}
          />

          <div className="date-group">
            <div className="date-item">
              <label htmlFor="start-date">Start Date: </label>
              <input
                type="date"
                id="start-date"
                name="startDate"
                placeholder="Start Date"
                onChange={formStateMod}
              />
            </div>

            <div className="date-item">
              <label htmlFor="end-date">End Date: </label>
              <input
                type="date"
                id="end-date"
                name="endDate"
                placeholder="End Date"
                onChange={formStateMod}
              />
            </div>
          </div>

          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Delicious, City"
            onChange={formStateMod}
          />
        </>
      ) : (
        ""
      )}
    </fieldset>
  );
}

export { Education };

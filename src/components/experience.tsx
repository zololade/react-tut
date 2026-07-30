import type { UserData } from "../types/types";
import { DropDownBtn } from "./form";

function Experience({ visibility, showBtn, formStateMod }: UserData) {
  return (
    <fieldset className="exp" aria-labelledby="experience-heading">
      <div className="header-group">
        <h2 id="experience-heading">Experience</h2>
        <DropDownBtn showBtn={showBtn} />
      </div>
      <hr />

      {visibility.exp ? (
        <>
          <label htmlFor="company">Company Name: </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter Company Name"
            onChange={formStateMod}
          />

          <label htmlFor="position">Position Title: </label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Enter Position Title"
            onChange={formStateMod}
          />

          <div className="date-group">
            <div className="date-item">
              <label htmlFor="start-date">Start Date: </label>
              <input
                type="date"
                id="start-date"
                name="expStartDate"
                placeholder="Start Date"
                onChange={formStateMod}
              />
            </div>

            <div className="date-item">
              <label htmlFor="end-date">End Date: </label>
              <input
                type="date"
                id="end-date"
                name="expEndDate"
                placeholder="End Date"
                onChange={formStateMod}
              />
            </div>
          </div>

          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            name="expLocation"
            placeholder="Delicious, City"
            onChange={formStateMod}
          />

          <label htmlFor="Description">Description: </label>
          <textarea
            id="Description"
            name="expDesc"
            placeholder="Enter Description"
            onChange={formStateMod}
          ></textarea>
        </>
      ) : (
        ""
      )}
    </fieldset>
  );
}

export { Experience };

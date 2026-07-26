function Education() {
  return (
    <fieldset className="edu" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      <hr />
      <label htmlFor="school">School: </label>
      <input type="text" id="school" placeholder="Enter School" />

      <label htmlFor="degree">Degree: </label>
      <input type="text" id="degree" placeholder="Enter Degree" />

      <label htmlFor="start-date">Start Date: </label>
      <input type="date" id="start-date" placeholder="Start Date" />

      <label htmlFor="end-date">End Date: </label>
      <input type="date" id="end-date" placeholder="End Date" />

      <label htmlFor="location">Location: </label>
      <input type="text" id="location" placeholder="Delicious City"></input>
    </fieldset>
  );
}

export { Education };

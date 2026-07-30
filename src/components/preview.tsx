import type { State } from "../types/types";

function Preview({ formState }: { formState: State }) {
  return (
    <section className="preview">
      <h1>{formState.name}</h1>
      <p>{formState.email}</p>
      <p>{formState.phone}</p>
      <p>{formState.address_line1}</p>
      <p>{formState.school}</p>
      <p>{formState.degree}</p>
      <p>{formState.startDate}</p>
      <p>{formState.endDate}</p>
      <p>{formState.location}</p>
      <p>{formState.company}</p>
      <p>{formState.position}</p>
      <p>{formState.expStartDate}</p>
      <p>{formState.expEndDate}</p>
      <p>{formState.expLocation}</p>
      <p>{formState.expDesc}</p>
    </section>
  );
}

export { Preview };

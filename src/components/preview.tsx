import type { State } from "../types/types";

function Preview({ formState }: { formState: State }) {
  return (
    <section className="preview">
      <h1>{formState.name}</h1>
      <p>{formState.email}</p>
      <p>{formState.phone}</p>
      <p>{formState.address_line1}</p>
    </section>
  );
}

export { Preview };

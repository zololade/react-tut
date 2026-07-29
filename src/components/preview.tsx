import type { FormProp } from "../types/types";

function Preview({ formState }: Pick<FormProp, "formState">) {
  return (
    <section className="preview">
      <h1>{formState.name}</h1>
    </section>
  );
}

export { Preview };

import type { UserData } from "../types/types";

function Bio({ formStateMod }: Pick<UserData, "formStateMod">) {
  return (
    <fieldset className="bio" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Personal details</h2>
      <hr />

      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="name"
        required
        placeholder="First and Last name"
        onChange={formStateMod}
      />

      <label htmlFor="email">Email: </label>
      <input
        type="mail"
        id="email"
        name="email"
        autoComplete="email"
        required
        placeholder="Enter Email"
        onChange={formStateMod}
      />

      <label htmlFor="phone">Phone: </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        autoComplete="phone"
        required
        placeholder="Enter Phone number"
        onChange={formStateMod}
      />

      <label htmlFor="address-line1">Street Address: </label>
      <input
        type="text"
        id="address-line1"
        name="address_line1"
        autoComplete="address-line1"
        required
        placeholder="123 Main St"
        onChange={formStateMod}
      />
    </fieldset>
  );
}

export { Bio };

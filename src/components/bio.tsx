import { SubmitBtn } from "./form";

function Bio() {
  return (
    <fieldset className="bio" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Personal details</h2>
      <hr />

      <label htmlFor="name">Name: </label>
      <input type="text" id="name" autoComplete="name" required placeholder="First and Last name" />

      <label htmlFor="email">Email: </label>
      <input type="mail" id="email" autoComplete="email" required placeholder="Enter Email" />

      <label htmlFor="phone">Phone: </label>
      <input type="tel" id="phone" autoComplete="phone" required placeholder="Enter Phone number" />

      <label htmlFor="address-line1">Street Address: </label>
      <input
        type="text"
        id="address-line1"
        name="address_line1"
        autoComplete="address-line1"
        required
        placeholder="123 Main St"
      ></input>

      <SubmitBtn />
    </fieldset>
  );
}

export { Bio };

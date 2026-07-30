import type { FormField } from "../types/types";

// Create the fields array outside the component to prevent re-creation on render
const BIO_FIELDS: FormField[] = [
  {
    id: "name",
    name: "name",
    label: "Name: ",
    type: "text",
    autoComplete: "name",
    placeholder: "First and Last name",
  },
  {
    id: "email",
    name: "email",
    label: "Email: ",
    type: "email",
    autoComplete: "email",
    placeholder: "Enter Email",
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone: ",
    type: "tel",
    autoComplete: "phone",
    placeholder: "Enter Phone number",
  },
  {
    id: "address-line1",
    name: "address_line1",
    label: "Street Address: ",
    type: "text",
    autoComplete: "address-line1",
    placeholder: "123 Main St",
  },
];

export { BIO_FIELDS };

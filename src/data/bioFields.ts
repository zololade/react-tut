import type { FormConfig } from "../types/types";

// Create the fields array outside the component to prevent re-creation on render
const BIO_FIELDS: FormConfig[] = [
  {
    id: "name",
    name: "name",
    label: "Name: ",
    type: "text",
    autoComplete: "name",
    placeholder: "First and Last name",
    required: true,
  },
  {
    id: "email",
    name: "email",
    label: "Email: ",
    type: "email",
    autoComplete: "email",
    placeholder: "Enter Email",
    required: true,
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone: ",
    type: "tel",
    autoComplete: "phone",
    placeholder: "Enter Phone number",
    required: true,
  },
  {
    id: "address-line1",
    name: "address_line1",
    label: "Street Address: ",
    type: "text",
    autoComplete: "address-line1",
    placeholder: "123 Main St",
    required: true,
  },
];

export { BIO_FIELDS };

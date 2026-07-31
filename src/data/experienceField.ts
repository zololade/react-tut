import type { FormSection } from "../types/types";

// Create the fields array outside the component to prevent re-creation on render
const EXP_FIELDS: FormSection[] = [
  {
    id: "company",
    name: "company",
    label: "Company Name: ",
    type: "text",
    placeholder: "Enter Company Name",
  },
  {
    id: "position",
    name: "position",
    label: "Position Title: ",
    type: "text",
    placeholder: "Enter Position Title",
  },
  {
    id: "start-date",
    name: "expStartDate",
    label: "Start Date: ",
    type: "date",
    placeholder: "Start Date",
  },
  {
    id: "end-date",
    name: "expEndDate",
    label: "End Date: ",
    type: "date",
    placeholder: "End Date",
  },
  {
    id: "location",
    name: "expLocation",
    label: "Location: ",
    type: "text",
    placeholder: "Delicious, City",
  },
];

export { EXP_FIELDS };

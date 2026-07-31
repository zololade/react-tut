import type { FormConfig } from "../types/types";

// Create the fields array outside the component to prevent re-creation on render
const EDU_FIELDS: FormConfig[] = [
  {
    id: "school",
    name: "school",
    label: "School: ",
    type: "text",
    placeholder: "Enter School",
  },
  {
    id: "degree",
    name: "degree",
    label: "Degree: ",
    type: "text",
    placeholder: "Enter Degree",
  },
  {
    id: "start-date",
    name: "startDate",
    label: "Start Date: ",
    type: "date",
    placeholder: "Start Date",
  },
  {
    id: "end-date",
    name: "endDate",
    label: "End Date: ",
    type: "date",
    placeholder: "End Date",
  },
  {
    id: "location",
    name: "location",
    label: "Location: ",
    type: "text",
    placeholder: "Delicious, City",
  },
];

export { EDU_FIELDS };

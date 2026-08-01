import type { SubmitEventHandler, ChangeEvent, ReactNode } from "react";

type FormFields =
  | "name"
  | "email"
  | "phone"
  | "address_line1"
  | "school"
  | "degree"
  | "startDate"
  | "endDate"
  | "location"
  | "company"
  | "position"
  | "expStartDate"
  | "expEndDate"
  | "expLocation"
  | "expDesc";

interface FormProp {
  handleSubmit: SubmitEventHandler;
  children: ReactNode;
}

interface UserData {
  formStateMod: (e: ChangeType) => void;
  visibility: Visibility;
  showBtn: () => void;
  formState: State;
}

type Visibility = { exp: boolean; edu: boolean };
type ChangeType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type State = { [k in FormFields]: string };

//form stuff
interface FormConfig {
  id: string;
  name: FormFields;
  label: string;
  type: string;
  autoComplete?: string;
  placeholder: string;
  required?: boolean;
  halfWidth?: boolean;
}

export type { FormProp, UserData, Visibility, State, ChangeType, FormConfig };

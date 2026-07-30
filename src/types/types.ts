import type { SubmitEventHandler, ChangeEvent, ReactNode } from "react";

interface FormProp {
  handleSubmit: SubmitEventHandler;
  children: ReactNode;
}

interface UserData {
  formStateMod: (e: ChangeType) => void;
  visibility: Visibility;
  showBtn: () => void;
}

type Visibility = { exp: boolean; edu: boolean };
type ChangeType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type State = {
  name: string;
  email: string;
  phone: string;
  address_line1: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  company: string;
  position: string;
  expStartDate: string;
  expEndDate: string;
  expLocation: string;
  expDesc: string;
};

export type { FormProp, UserData, Visibility, State, ChangeType };

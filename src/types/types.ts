import type { Dispatch, SetStateAction, SubmitEventHandler } from "react";

interface FormProp {
  formState: State;
  formStateMod: Dispatch<SetStateAction<State>>;
  handleSubmit: SubmitEventHandler;
}
type visibility = { exp: boolean; edu: boolean };

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

export type { FormProp, visibility, State };

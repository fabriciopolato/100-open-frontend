import { FormikErrors, FormikTouched } from 'formik';

export interface IUser {
  username: string;
  password: string;
}

export interface ICompany {
  _id: string;
  name: string;
  type: string;
  description?: string;
  location?: ILocation;
  isActive: boolean;
  votesForInactivity: string[];
}

export interface ILocation {
  city: string;
  state: string;
  country: string;
}

export interface ISignFormProps {
  buttonText: string;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1,
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  values: IUser;
  errors: FormikErrors<{
    username: string;
    password: string;
  }>;
  touched: FormikTouched<{
    username: string;
    password: string;
  }>;
}

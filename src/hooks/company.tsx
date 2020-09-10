import React, {
  createContext,
  useState,
  Dispatch,
  useEffect,
  SetStateAction,
  FormEvent,
} from 'react';
import { ICompany } from '../interfaces';

export interface IContext {
  companiesRepository: ICompany[];
  handleCompanies(companies: ICompany[]): void;
}

const Context = createContext<IContext>({} as IContext);

const CompanyProvider: React.FC = ({ children }) => {
  const [companiesRepository, setCompaniesRepository] = useState<ICompany[]>(
    [],
  );

  const handleCompanies = (companies: ICompany[]) => {
    setCompaniesRepository(companies);
  };

  return (
    <Context.Provider
      value={{
        companiesRepository,
        handleCompanies,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { CompanyProvider, Context };

import React, { createContext, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ICompany } from '../interfaces';
import { api } from '../services/api';

export interface IContext {
  companiesRepository: ICompany[];
  handleSearchedCompanies(search: string): Promise<void>;
  handleInactivity(id: string): void;
  currentCompany: ICompany;
  handleCurrentCompany(company: ICompany): void;
  setCompaniesRepository: React.Dispatch<React.SetStateAction<ICompany[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompanyContext = createContext<IContext>({} as IContext);

const CompanyProvider: React.FC = ({ children }) => {
  const [companiesRepository, setCompaniesRepository] = useState<ICompany[]>(
    [],
  );
  const [currentCompany, setCurrentCompany] = useState<ICompany>(
    {} as ICompany,
  );
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleCurrentCompany = (company: ICompany) => {
    setCurrentCompany(company);
  };

  const handleSearchedCompanies = async (search: string) => {
    const response = await api.get('/company', {
      params: {
        name: search,
      },
    });
    setCompaniesRepository(response.data);
  };

  const handleInactivity = async (id: string) => {
    setIsLoading(true);
    try {
      await api.put(`/company/vote/${id}`);
    } catch (error) {
      console.log(error);
    }
    // setTimeout used only to show Loader on screen
    setTimeout(() => {
      setIsLoading(false);
      history.push('/');
    }, 1500);
  };

  return (
    <CompanyContext.Provider
      value={{
        setCompaniesRepository,
        handleCurrentCompany,
        currentCompany,
        companiesRepository,
        handleSearchedCompanies,
        handleInactivity,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

const useCompany = (): IContext => {
  const context = useContext(CompanyContext);

  if (!context) {
    throw new Error('useCompany must be used within an AuthProvider');
  }

  return context;
};

export { CompanyProvider, useCompany };

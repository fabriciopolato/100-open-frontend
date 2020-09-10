import React, {
  useState,
  ChangeEvent,
  FormEvent,
  Fragment,
  useEffect,
} from 'react';

import { Link } from 'react-router-dom';
import { Container, SearchContainer, SearchInput } from './styles';
import Form from '../Form';
import { Button, StartupCard } from '../..';
import { useCompany } from '../../../hooks/company';

const SearchForm: React.FC = () => {
  const [search, setSearch] = useState('');

  const {
    companiesRepository,
    handleSearchedCompanies,
    handleCurrentCompany,
    setCompaniesRepository,
  } = useCompany();

  useEffect(() => {
    return () => {
      setCompaniesRepository([]);
    };
  }, [setCompaniesRepository]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await handleSearchedCompanies(search);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SearchContainer>
          <label htmlFor="search">Nome da startup</label>
          <SearchInput>
            <input onChange={handleChange} type="text" id="search" />
            <Button type="submit">buscar</Button>
          </SearchInput>
          {companiesRepository.map(company => {
            return (
              <Fragment key={company._id}>
                {company.isActive ? (
                  <Link
                    to={`/editar/${company._id}`}
                    onClick={() => handleCurrentCompany(company)}
                  >
                    <StartupCard
                      isActive={company.isActive}
                      name={company.name}
                      description={company.description}
                      type={company.type}
                    />
                  </Link>
                ) : (
                  <StartupCard
                    isActive={company.isActive}
                    name={company.name}
                    description={company.description}
                    type={company.type}
                  />
                )}
              </Fragment>
            );
          })}
        </SearchContainer>
        <Link to="/criar-startup">
          {companiesRepository.length ? (
            <Button type="button">adicionar startups</Button>
          ) : null}
        </Link>
      </Form>
    </Container>
  );
};

export default SearchForm;

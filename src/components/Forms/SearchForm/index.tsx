/* eslint-disable no-nested-ternary */
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  Fragment,
  useEffect,
} from 'react';

import { Link } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import {
  Container,
  SearchContainer,
  SearchInput,
  StyledLoader,
  StyledError,
} from './styles';
import Form from '../Form';
import { Button, StartupCard } from '../..';
import { useCompany } from '../../../hooks/company';

const SearchForm: React.FC = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const {
    companiesRepository,
    handleSearchedCompanies,
    handleCurrentCompany,
    setCompaniesRepository,
    isLoading,
    setIsLoading,
  } = useCompany();

  useEffect(() => {
    return () => {
      setCompaniesRepository([]);
    };
  }, [setCompaniesRepository]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await handleSearchedCompanies(search);
      setError('');
    } catch (err) {
      setError('Nenhuma startup encontrada');
    }
    // setTimeout used only to show loader in screen
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
          {isLoading ? (
            <StyledLoader>
              <BounceLoader size={60} color="#45aaf2" />
            </StyledLoader>
          ) : error ? (
            <StyledError>{error}</StyledError>
          ) : (
            companiesRepository.map(company => {
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
            })
          )}
        </SearchContainer>
        {!isLoading && (
          <Link to="/criar-startup">
            {companiesRepository.length || error ? (
              <Button type="button">adicionar startups</Button>
            ) : null}
          </Link>
        )}
      </Form>
    </Container>
  );
};

export default SearchForm;

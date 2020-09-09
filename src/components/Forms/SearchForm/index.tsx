import React from 'react';

import { Link } from 'react-router-dom';
import { Container, SearchContainer, SearchInput } from './styles';
import Form from '../Form';
import { Button, StartupCard } from '../..';

const SearchForm: React.FC = () => (
  <Container>
    <Form>
      <SearchContainer>
        <label htmlFor="search">Nome da startup</label>
        <SearchInput>
          <input type="text" name="search" />
          <Button type="submit">buscar</Button>
        </SearchInput>
        <Link to="/editar/1">
          <StartupCard />
        </Link>
        <StartupCard />
        <StartupCard />
        <StartupCard />
      </SearchContainer>
      <Link to="/criar-startup">
        <Button>adicionar startups</Button>
      </Link>
    </Form>
  </Container>
);

export default SearchForm;

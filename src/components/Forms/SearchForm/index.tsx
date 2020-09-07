import React from 'react';

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
        <StartupCard />
        <StartupCard />
        <StartupCard />
        <StartupCard />
      </SearchContainer>
    </Form>
  </Container>
);

export default SearchForm;

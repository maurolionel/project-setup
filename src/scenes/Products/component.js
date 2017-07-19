import React from 'react';
import styled from 'styled-components';
import Aside from './components/Aside';
import SearchResult from '../../components/SearchResult';

const Section = styled.section`
  display: flex;
`;

const Products = () => (
  <Section>
    <Aside />
    <SearchResult />
  </Section>
);

export default Products;

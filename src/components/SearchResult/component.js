import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

const CardContainer = styled.article`
  flex: 1 1 30%;
  padding: 1rem;
`;

const SearchResult = () => (
  <Section>
    <CardContainer><Card /></CardContainer>
    <CardContainer><Card /></CardContainer>
    <CardContainer><Card /></CardContainer>
    <CardContainer><Card /></CardContainer>
    <CardContainer><Card /></CardContainer>
    <CardContainer><Card /></CardContainer>
    <CardContainer><Card /></CardContainer>
  </Section>
);

export default SearchResult;

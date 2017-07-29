import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Aside from './components/Aside';
import SearchResult from '../../components/SearchResult';

const Section = styled.section`
  display: flex;
`;

class Products extends PureComponent {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    console.log('PRODUCTS.ALL', this.props.products);
    return (
      <Section>
        <Aside />
        <SearchResult />
      </Section>
    );
  }
}

export default Products;

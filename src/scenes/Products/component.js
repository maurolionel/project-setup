import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    return (
      <Section>
        <Aside />
        <SearchResult results={this.props.products} />
      </Section>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array,
  onMount: PropTypes.func.isRequired
};

Products.defaultProps = {
  products: []
};

export default Products;

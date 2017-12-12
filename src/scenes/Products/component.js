import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Aside from '../../components/Aside';
import SearchResult from '../../components/SearchResult';

const Section = styled.section`
  display: flex;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  &.is-visible {
    z-index: 100;
    background-color: rgba(255,255,255,.5);
  }
`;

class Products extends PureComponent {
  constructor(props) {
    super(props);
    if (this.props.categories && !this.props.categories.length) this.props.getCategories();
  }
  render() {
    const { products, categories, isLoading } = this.props;
    return (
      <Section>
        <Overlay className={isLoading ? 'is-visible' : ''} />
        <Aside />
        {(products && products.length)
          ? <SearchResult results={products} categories={categories} />
          : <p>No hay productos para esta categoría</p>
        }
      </Section>
    );
  }
}

Products.propTypes = {
  categories: PropTypes.array,
  products: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  getCategories: PropTypes.func.isRequired
};

Products.defaultProps = {
  categories: [],
  products: []
};

export default Products;

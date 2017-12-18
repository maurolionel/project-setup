import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import isEmpty from 'lodash.isempty';
import Pictures from './components/Pictures';
import AddToCartSection from './components/AddToCartSection';
import AdditionalInfoSection from './components/AdditionalInfoSection';
import Paper from '../../components/Paper';
import Preloader from '../../components/Preloader';
import { convertStringToNumber } from '../../services/utils';

const Wrapper = styled(Paper)`
  flex-direction: column;
  padding: 0;
  border-radius: 0;
`;

const MainInfo = styled.div`
  display: flex;
  height: 500px;
`;

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProductDetail(convertStringToNumber(this.props.match.params.productId));
  }

  componentWillUnmount() {
    this.props.deleteProductDetail();
  }

  render() {
    const { product, isLoading } = this.props;
    if (isLoading) return <Preloader />;
    if (isEmpty(product)) return <p>El producto no existe</p>;
    return (
      <Wrapper withoutChangingStateStyle>
        <MainInfo>
          <Pictures url={product.images[0]} />
          <AddToCartSection product={product} />
        </MainInfo>
        <AdditionalInfoSection title="Descripción del producto">
          <p>{product.description}</p>
        </AdditionalInfoSection>
        {product.characteristics.map(char => (
          <AdditionalInfoSection key={char.typeId} title={char.type}>
            <p>{char.item}</p>
          </AdditionalInfoSection>
        ))}
      </Wrapper>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.object.isRequired,
  product: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  getProductDetail: PropTypes.func.isRequired
};

ProductDetail.defaultProps = {
  product: {}
};

export default withRouter(ProductDetail);

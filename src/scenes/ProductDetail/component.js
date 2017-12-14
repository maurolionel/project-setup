import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pictures from './components/Pictures';
import AddToCartSection from './components/AddToCartSection';
import AdditionalInfoSection from './components/AdditionalInfoSection';
import Paper from '../../components/Paper';
import Preloader from '../../components/Preloader';

const Wrapper = styled(Paper)`
  flex-direction: column;
  padding: 0;
  border-radius: 0;
`;

const MainInfo = styled.div`
  display: flex;
  height: 500px;
`;

class ProductDetail extends PureComponent {
  componentDidMount() {
    this.props.getProductDetail();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.productId !== this.props.match.params.productId) {
      this.props.getProductDetail();
    }
  }

  render() {
    const { product, isLoading } = this.props;
    if (!product) return null;
    if (isLoading) return <Preloader />;
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

export default ProductDetail;

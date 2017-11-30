import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { convertStringToNumber } from '../../services/utils';
import Pictures from './components/Pictures';
import AddToCartSection from './components/AddToCartSection';
import AdditionalInfoSection from './components/AdditionalInfoSection';
import TechnicalDetails from './components/TechnicalDetails';
import BoxContent from './components/BoxContent';
import Paper from '../../components/Paper';

const technicalDetailsData = [
  'Simple setup — 1.44" color LCD.',
  'Complete wireless solution — easy iPad, iPhone, Android tablet and smartphone printing; includes Wi-Fi Direct for network-free printing.',
  'Affordable individual ink cartridges — replace only the color you need. Reload paper less often — 100-sheet paper capacity.',
  'Truly touchable photos and documents — instant-dry ink for smudge, fade and water resistant prints.'
];

const boxContentData = [
  '1 impresora HP LaserJet PRO 100',
  '1 cable USB',
  '4 CartuchoS de toner CYMK 126A',
  '1 Instrucciones de uso'
];

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
  constructor(props) {
    super(props);
    const { products, match: { params } } = this.props;
    const product = products
      ? products.find(aProduct => convertStringToNumber(params.productId) === aProduct.id)
      : {};
    this.state = { product };
  }

  componentWillReceiveProps(nextProps) {
    this.setProduct(nextProps);
  }
  
  setProduct = (props) => {
    const { match: { params } } = props;
    if (props.products) {
      const product = props.products.find(aProduct =>
        convertStringToNumber(params.productId) === aProduct.id
      );
      this.setState({ product });
    }
  };

  render() {
    const { product } = this.state;
    if (!product) return null;
    const imagePath = `${this.props.staticPath}${product.categoryId}/${product.id}.jpg`;
    return (
      <Wrapper withoutChangingStateStyle>
        <MainInfo>
          <Pictures url={imagePath} />
          <AddToCartSection product={product} />
        </MainInfo>
        <AdditionalInfoSection title="Descripción del producto">
          <p>{product.description}</p>
        </AdditionalInfoSection>
        <AdditionalInfoSection title="Ficha técnica">
          <TechnicalDetails data={technicalDetailsData} />
        </AdditionalInfoSection>
        <AdditionalInfoSection title="Contenido de la caja">
          <BoxContent data={boxContentData} />
        </AdditionalInfoSection>
      </Wrapper>
    );
  }
}

ProductDetail.propTypes = {
  products: PropTypes.array,
  match: PropTypes.object.isRequired,
  staticPath: PropTypes.string.isRequired
};

ProductDetail.defaultProps = {
  products: []
};

export default ProductDetail;

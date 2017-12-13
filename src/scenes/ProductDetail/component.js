import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pictures from './components/Pictures';
import AddToCartSection from './components/AddToCartSection';
import AdditionalInfoSection from './components/AdditionalInfoSection';
import TechnicalDetails from './components/TechnicalDetails';
import BoxContent from './components/BoxContent';
import Paper from '../../components/Paper';
import Preloader from '../../components/Preloader';

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
  match: PropTypes.object.isRequired,
  product: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  getProductDetail: PropTypes.func.isRequired
};

ProductDetail.defaultProps = {
  product: {}
};

export default ProductDetail;

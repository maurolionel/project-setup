import React from 'react';
import styled from 'styled-components';
import Pictures from './components/Pictures';
import AddToCartSection from './components/AddToCartSection';
import AdditionalInfoSection from './components/AdditionalInfoSection';
import Description from './components/Description';
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

const ProductDetail = () => (
  <Wrapper withoutChangingStateStyle>
    <MainInfo>
      <Pictures />
      <AddToCartSection />
    </MainInfo>
    <AdditionalInfoSection title="Descripción del producto">
      <Description />
    </AdditionalInfoSection>
    <AdditionalInfoSection title="Ficha técnica">
      <TechnicalDetails data={technicalDetailsData} />
    </AdditionalInfoSection>
    <AdditionalInfoSection title="Contenido de la caja">
      <BoxContent data={boxContentData} />
    </AdditionalInfoSection>
  </Wrapper>
);

export default ProductDetail;

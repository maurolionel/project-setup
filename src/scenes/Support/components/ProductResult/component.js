import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const ProductPicture = styled.div`
  flex: 1;
  height: 350px;
  background-color: #ddd;
`;

const ProductGuides = styled.div`
  flex: 1;
`;

const ProductResult = () => (
  <Wrapper>
    <ProductPicture />
    <ProductGuides />
  </Wrapper>
);

export default ProductResult;

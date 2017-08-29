import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 1 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.whiteGray};
`;

const ProductImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Pictures = ({ url }) => (
  <Wrapper>
    <ProductImage src={url} />
  </Wrapper>
);

Pictures.propTypes = {
  url: PropTypes.string.isRequired
};

export default Pictures;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledStockLabel = styled.span`
  display: inline-block;
  padding: 0.1rem 0.25rem;
  color: ${({ theme }) => theme.base};
  border-radius: 3px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  &.with-stock { background-color: #4CAF50; }
  &.without-stock { background-color: #F44336; }
`;

const StockLabel = ({ withStock = true }) => (
  <StyledStockLabel className={withStock ? 'with-stock' : 'without-stock'}>
    {withStock ? 'En stock' : 'Sin stock'}
  </StyledStockLabel>
);

StockLabel.propTypes = {
  withStock: PropTypes.bool
};

StockLabel.defaultProps = {
  withStock: true
};

export default StockLabel;

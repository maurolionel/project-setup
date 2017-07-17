import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledStockLabel = styled.span`
  padding: 0.06rem 0.2rem 0;
  color: ${({ theme }) => theme.base};
  border-radius: 2px;
  font-size: 0.75rem;
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

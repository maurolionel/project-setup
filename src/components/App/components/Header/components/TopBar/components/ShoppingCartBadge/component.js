import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Badge = styled.span`
  opacity: ${({ children }) => (children > 0 ? '1' : '0')};
  position: absolute;
  top: 5px;
  right: 5px;
  min-width: 13px;
  padding: 0.1rem 0.23rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.success};
  font-size: 0.65rem;
  transform: translateY(${({ children }) => (children > 0 ? '0' : '-50')}px);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
`;

const ShoppingCartBadge = ({ quantity }) => <Badge>{quantity || ''}</Badge>;

ShoppingCartBadge.propTypes = {
  quantity: PropTypes.number
};

ShoppingCartBadge.defaultProps = {
  quantity: 0
};

export default ShoppingCartBadge;

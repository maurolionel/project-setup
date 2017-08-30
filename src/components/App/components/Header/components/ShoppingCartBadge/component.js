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
  color: ${({ theme }) => theme.base};
  background-color: ${({ theme }) => theme.danger};
  font-size: 0.65rem;
  transform: translateY(${({ children }) => (children > 0 ? '0' : '-50')}px);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  &.is-fixed {
    top: 10px;
    right: 10px;
  }
`;

const ShoppingCartBadge = ({ quantity, className }) =>
  <Badge className={className}>{quantity || ''}</Badge>;

ShoppingCartBadge.propTypes = {
  quantity: PropTypes.number,
  className: PropTypes.string
};

ShoppingCartBadge.defaultProps = {
  quantity: 0,
  className: ''
};

export default ShoppingCartBadge;

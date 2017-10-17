import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 1.2rem;
  margin-left: 5px;
  margin-right: -1.5rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.base};
  background-color: ${({ theme }) => theme.danger};
  font-size: 0.9rem;
  text-align: center;
  transform: translateX(50px);
  transition-property: opacity, transform, margin-right;
  transition-timig-function: ease;
  transition-duration: 0.3s;
  &.is-filled {
    opacity: 1;
    margin-right: 0;
    transform: translateX(0px);
  }
  &.is-fixed {
    width: 1rem;
    padding: 0.1rem 0.7rem 0rem;
    margin: 0;
    font-size: 1rem;
  }
`;

const ShoppingCartBadge = ({ quantity, className }) => (
  <Badge className={`${className} ${quantity ? 'is-filled' : ''}`}>
    {quantity || ''}
  </Badge>
);

ShoppingCartBadge.propTypes = {
  quantity: PropTypes.number,
  className: PropTypes.string
};

ShoppingCartBadge.defaultProps = {
  quantity: 0,
  className: ''
};

export default ShoppingCartBadge;

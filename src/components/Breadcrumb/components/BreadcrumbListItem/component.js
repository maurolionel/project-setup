import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.li`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0 0;
  text-transform: capitalize;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.base};

  &:after {
    content: '\f105'; /* fontawesome fa-angle-right icon */
    margin: 0 0 0 0.5rem;
    font-family: 'FontAwesome';
  }

  &:last-child:after {
    content: '';
    display: none;
  }
`;

const BreadcrumbListItem = ({ children }) => <Label>{children}</Label>;

BreadcrumbListItem.propTypes = {
  children: PropTypes.any.isRequired
};

export default BreadcrumbListItem;

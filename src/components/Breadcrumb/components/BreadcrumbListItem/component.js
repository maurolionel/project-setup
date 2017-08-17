import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { replaceMiddleDashWithSpace } from '../../../../services/utils';

const StyledBreadcrumbListItem = styled.li`
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

const BreadcrumbListItem = ({ children }) => {
  let label = children;
  if (typeof children === 'string') label = replaceMiddleDashWithSpace(children);
  return <StyledBreadcrumbListItem>{label}</StyledBreadcrumbListItem>;
};

BreadcrumbListItem.propTypes = {
  children: PropTypes.any.isRequired
};

export default BreadcrumbListItem;

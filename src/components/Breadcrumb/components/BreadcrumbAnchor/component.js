import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from '../../../Anchor';

const StyledAnchor = styled(Anchor)`
  text-transform: capitalize;
`;

const BreadcrumbAnchor = ({ to, children }) => {
  const label = children.replace(/-/g, ' ');
  return <StyledAnchor to={to}>{label}</StyledAnchor>;
};

BreadcrumbAnchor.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default BreadcrumbAnchor;

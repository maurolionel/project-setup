import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'react-router-dom';
import { replaceMiddleDashWithSpace } from '../../../../services/utils';

const BreadcrumbAnchor = ({ to, children }) => {
  console.clear();
  console.log(children);
  const label = replaceMiddleDashWithSpace(children);
  return <Link to={to}>{label}</Link>;
};

BreadcrumbAnchor.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default BreadcrumbAnchor;

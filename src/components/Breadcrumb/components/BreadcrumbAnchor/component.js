import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom';

const BreadcrumbAnchor = ({ to, children }) => <Link to={to}>{children}</Link>;

BreadcrumbAnchor.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default BreadcrumbAnchor;

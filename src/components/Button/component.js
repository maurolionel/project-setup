import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '../Paper';

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 0.8rem;
  color: ${({ primary, theme }) => (primary ? theme.base : theme.gray)};
  background-color: ${({ primary, theme }) => (primary ? theme.accent : theme.whiteGray)};
  text-decoration: none;
`;

const Button = ({ primary = false, to = './', children = '' }) => (
  <Paper>
    <StyledButton to={to} primary={primary}>
      {children}
    </StyledButton>
  </Paper>
);

Button.propTypes = {
  primary: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  primary: false,
  to: './',
  children: ''
};

export default Button;

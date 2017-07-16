import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const StyledDiv = styled.div`
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => darken(0.04, theme.whiteGray)};
  color: ${({ theme }) => theme.gray};
  font-size: 0.9rem;
`;

const InfoTitle = styled.h3`
  margin: 0.5rem 0;
  font-size: 0.8rem;
  text-transform: uppercase;

  > * {
    margin: 0;
  }
`;

const AdditionalInfo = ({ title, children }) => (
  <StyledDiv>
    <InfoTitle>{title}:</InfoTitle>
    {children}
  </StyledDiv>
);

AdditionalInfo.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default AdditionalInfo;

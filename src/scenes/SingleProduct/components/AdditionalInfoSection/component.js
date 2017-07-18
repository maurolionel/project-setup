import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.gray};
  font-size: 0.9rem;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.1);

  > * {
    margin: 0;
  }

  ul {
    padding: 0 1rem;
    li {
      margin: 0.2rem 0;
    }
  }
  p {
    margin: 0.2rem 0;
  }
`;

const InfoTitle = styled.h3`
  margin: 0.5rem 0;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const AdditionalInfoSection = ({ title, children }) => (
  <StyledWrapper>
    <InfoTitle>{title}:</InfoTitle>
    {children}
  </StyledWrapper>
);

AdditionalInfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default AdditionalInfoSection;

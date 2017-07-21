import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.whiteGray};
  color: ${({ theme }) => theme.gray};
  background-color: ${({ theme }) => theme.base};
  font-size: 0.9rem;
  line-height: 1.5;

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
  <Wrapper>
    <InfoTitle>{title}:</InfoTitle>
    {children}
  </Wrapper>
);

AdditionalInfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default AdditionalInfoSection;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../../../components/Title';

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 1.5rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.whiteGray};
  color: ${({ theme }) => theme.gray};
  background-color: ${({ theme }) => theme.base};
  font-size: 0.9rem;
  line-height: 1.5;

  > * {
    flex: 3;
    margin: 0;
    text-transform: capitalize;
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

const InfoTitle = styled(Title)`
  flex: 1;
  overflow: hidden;
  margin: 0 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AdditionalInfoSection = ({ title, children }) => (
  <Wrapper>
    <InfoTitle>{title}</InfoTitle>
    {children}
  </Wrapper>
);

AdditionalInfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default AdditionalInfoSection;

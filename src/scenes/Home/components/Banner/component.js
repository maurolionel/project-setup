import React from 'react';
import styled from 'styled-components';
import config from '../../../../config';

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 440px;
`;

const StyledBanner = styled.img`
  flex: 1;
  object-fit: cover;
`;

const Banner = () => (
  <Section>
    <StyledBanner src={`${config.api.path}images/common/banner.jpg`} />
  </Section>
);

export default Banner;

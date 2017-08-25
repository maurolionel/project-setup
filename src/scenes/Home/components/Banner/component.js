import React from 'react';
import styled from 'styled-components';
import bannerSource from './images/banner.jpg';

const Section = styled.section`
  display: flex;
  width: 100%;
`;

const StyledBanner = styled.img`
  flex: 1;
  object-fit: cover;
`;

const Banner = () => (
  <Section>
    <img
      src={bannerSource}
      style={{
        flex: 1,
        objectFit: 'cover'
      }}
      alt=""
    />
  </Section>
);

export default Banner;

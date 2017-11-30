import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';

const Wrapper = styled.div`
  .slick-arrow {
    z-index: 50;
    width: auto;
    height: auto;

    &:before {
      color: rgba(0,0,0,.5);
      font-size: 30px;
    }
    &.slick-prev {
      left: 15px;
    }
    &.slick-next {
      right: 15px;
    }
  }
  .slick-dots {
    bottom: -40px;
  }
`;

const Carousel = ({ slides }) => (
  <Wrapper>
    <Slider
      autoplay
      autoplaySpeed={4000}
      dots
      draggable
      pauseOnHover
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {slides.map(url => <img src={url} alt="imprek" />)}
    </Slider>
  </Wrapper>
);

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Carousel;

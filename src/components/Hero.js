/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeroSection = styled.section`
   height: 100vh;
   max-height: 1100px;
   position: relative;
   overflow: hidden;
`;

const HeroWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;
   color: red;
`;

const HeroSlide = styled.div``;
const HeroSlider = styled.div``;
const HeroImage = styled.div``;
const HeroContent = styled.div``;

const Hero = ({ slides }) => {
  console.log(slides);
  return (
    <>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide) => (
            <HeroSlide key={slide.id}>
              {slide.id && (
              <HeroSlider>
                <HeroImage src={slide.image} alt={slide.alt} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                </HeroContent>
              </HeroSlider>
              )}
            </HeroSlide>
          ))}
        </HeroWrapper>
      </HeroSection>
    </>
  );
};
Hero.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default Hero;

import React from 'react';
import styled from 'styled-components';

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

const Hero = () => (
  <HeroSection>
    <HeroWrapper>
      <h1>Hero</h1>
    </HeroWrapper>
  </HeroSection>
);

export default Hero;

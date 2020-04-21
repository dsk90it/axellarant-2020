import React from 'react';
import styled from 'styled-components';
import { lg, theme, MainTitle } from '../styles/theme';
import FeaturesList from './macros/feature-list';

const HeroWrapper = styled.section`
    display: flex;
    flex-direction: column;
    background: url('//d3lf10b5gahyby.cloudfront.net/misc/senthil/banner.jpg') no-repeat center;
    background-size: cover;
    align-items: center;
    justify-content: center;
    height: 600px;
    color: ${theme.white};
    text-align: center;
    padding: 16px;

    ${lg}{
       height: 700px;
    }
`;

const HeroTitle = styled(MainTitle)`
   margin: 0 auto 24px;
   max-width: 450px;
`;

const HeroSection = () => {
   return (
      <HeroWrapper>
         <HeroTitle>Integer bibendum sit amet  arcu vel egestas.</HeroTitle>
         <FeaturesList/>
      </HeroWrapper>
   );
};

export default HeroSection

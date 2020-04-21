import React from 'react';
import styled from 'styled-components';
import { Container, sm } from '../styles/theme';
import SectionWrapper from './micros/section-wrapper';

const MapCol = styled.div`
   float: left;
   width: 100%;
   
   &:last-child{
      padding-top: 32px;
   }

   ${sm}{
      width: 50%;
      padding-right: 16px;

      &:last-child{
         padding-top: 0;
         padding-left: 16px;
      }
   }
`;

const SubTitle = styled.h2`
   margin: 0 0 24px;
   font-weight: 400;
   font-size: 24px;
`;

const MapSection = () => {
   return (
      <SectionWrapper>
         <Container>
            <MapCol>
               <SubTitle>Mauris id bibendum est. Proin dapibus sollicitudin iaculis, Mae</SubTitle>
               <p>Quo virtute diceret vituperata ea, cum eros assentior voluptatum ex, duo partem assentior no. Tempor blandit similique vim ne. Esse definitiones ea vis, putant gubergren cum eu. Ei sed torquatos adversarium, vix ad congue repudiare maiestatis. Vis quis antiopam ex, quem qualisque expetendis pri et. At quem dicat constituam sit.</p>
            </MapCol>
            <MapCol>
               <img className="img-responsive" src="//d3lf10b5gahyby.cloudfront.net/misc/senthil/map.jpg" alt="Map" />
            </MapCol>
         </Container>
      </SectionWrapper>
   );
};

export default MapSection

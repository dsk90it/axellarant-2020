import React from 'react';
import styled from 'styled-components';
import SectionWrapper from './micros/section-wrapper';
import { theme, SecondaryTitle, clearFix, sm, xs, Container } from '../styles/theme';
import SpeechCard, { CardWrapper } from './macros/speech-card';

const TestimonialsRow = styled.div`
   ${clearFix};

   ${sm}{
      margin: 0 -20px;
   }
`;
const TestimonialsCol = styled.div`
   float: left;
   width: 100%;

   ${xs}{
      &:first-child, &:last-child {
         display: none;
      }
   }

   ${sm}{
      width: 33.33%;
      padding: 0 20px;

      &:nth-child(2) {
         ${CardWrapper}{
            padding-top: 48px;
            padding-bottom: 48px;
         }
      }
   }
`;

const Testimonials = () => {
   return (
      <SectionWrapper bgColor={theme.greyLight}>
         <Container>
            <SecondaryTitle className="text-center">Testimonials</SecondaryTitle>
            <TestimonialsRow>
               <TestimonialsCol>
                  <SpeechCard/>
               </TestimonialsCol>

               <TestimonialsCol>
                  <SpeechCard/>
               </TestimonialsCol>

               <TestimonialsCol>
                  <SpeechCard/>
               </TestimonialsCol>
            </TestimonialsRow>
         </Container>
      </SectionWrapper>
   )
};

export default Testimonials

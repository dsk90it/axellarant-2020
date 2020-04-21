import React from 'react';
import styled from "styled-components";
import SectionWrapper from './micros/section-wrapper';
import { Container, SecondaryTitle, clearFix, sm } from '../styles/theme';
import { FormGroup, FormControl } from './micros/form-elements';
import { Button } from './micros/button';

const FormWrapper = styled.form`
   ${clearFix};
   margin: 0 auto;
   max-width: 840px;
   padding-top: 24px;
   text-align: center;

   ${Button}{
      min-width: 120px;
   }

   ${sm}{
      ${FormGroup}{
         float: left;
         width: 33.33%;
         padding: 0 8px;

         &.fw{
            width: 100% !important;
         }
      }
   }
`;

const FormSection = () => {
   return (
      <SectionWrapper bgImg={'//d3lf10b5gahyby.cloudfront.net/misc/senthil/form_banner.jpg'}>
         <Container>
            <SecondaryTitle className="text-center color-white">Convinced To Work With Us?</SecondaryTitle>
            <p className="text-center color-white">Company has helped agencies keep their promises to clients since 2005</p>

            <FormWrapper>
               <FormGroup>
                  <FormControl placeholder="Fullname" />
               </FormGroup>
               
               <FormGroup>
                  <FormControl type="email" placeholder="Email Address" />
               </FormGroup>

               <FormGroup>
                  <FormControl placeholder="Phone Number" />
               </FormGroup>

               <FormGroup className="fw">
                  <FormControl as="textarea" rows="5" cols="60" placeholder="Message in brief" />
               </FormGroup>

               <Button>Submit</Button>
            </FormWrapper>
         </Container>
      </SectionWrapper>
   );
};

export default FormSection

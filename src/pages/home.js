import React, { Component, Fragment } from 'react';
import GlobalStyle from '../styles/globals';
import { ContentWrapper } from '../styles/theme';
import Header from '../components/header';
import HeroSection from '../components/hero';
import MapSection from '../components/map-section';
import Testimonials from '../components/testimonials';
import FormSection from '../components/form';
import Footer from '../components/footer';

class Home extends Component {
   render(){
      return (
         <Fragment>
            <GlobalStyle />
            
            <Header/>
            
            <ContentWrapper>
               <HeroSection />

               <MapSection/>

               <Testimonials/>

               <FormSection/>

               <Footer/>
            </ContentWrapper>
         </Fragment>
      )
   }
}

export default Home;

import React, { Component, Fragment } from 'react';

// Global Styles
import GlobalStyle from '../styles/globals';
import { ContentWrapper } from '../styles/theme';

// Components
import Header from '../components/header';
import HeroSection from '../components/hero';
import MapSection from '../components/map-section';
import Testimonials from '../components/testimonials';

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
            </ContentWrapper>
         </Fragment>
      )
   }
}

export default Home;

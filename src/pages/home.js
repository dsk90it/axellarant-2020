import React, { Component, Fragment } from 'react';

// Global Styles
import GlobalStyle from '../styles/globals';
import { ContentWrapper } from '../styles/theme';

// Components
import Header from '../components/header';
import HeroSection from '../components/hero-section';

class Home extends Component {
   render(){
      return (
         <Fragment>
            <GlobalStyle />

            <Header/>
            
            <ContentWrapper>
               <HeroSection />
               
            </ContentWrapper>
         </Fragment>
      )
   }
}

export default Home;

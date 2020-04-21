import React, { Component, Fragment } from 'react';

import GlobalStyle from '../styles/globals';
import { ContentWrapper } from '../styles/theme';

import Header from '../components/header';

class Home extends Component {
   render(){
      return (
         <Fragment>
            <GlobalStyle />

            <Header/>
            
            <ContentWrapper>
               
            </ContentWrapper>
         </Fragment>
      )
   }
}

export default Home;

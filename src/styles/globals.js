import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

// Global Styles
const GlobalStyle = createGlobalStyle`
   *, *:before, *:after {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
   }
   body{
      margin: 0;
      padding: 0;
      font-family: ${theme.fontDefault};
      font-weight: ${theme.regular};
      font-size: ${theme.baseFontSize};
   }
   header, footer, section{
      display: block;
   }
   a, button {
      transition: all 0.2s;
   }
   a, a:hover, a:focus {
      text-decoration: none;
      outline: 0 none;
   }
   b, strong {
      font-weight: 600;
   }

   .img-responsive{
      max-width: 100%;
      height: auto;
   }
   .text-center{
      text-align: center;
   }
   .color-white{
      color: ${theme.white};
   }
`;

export default GlobalStyle
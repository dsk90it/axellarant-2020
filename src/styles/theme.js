import styled from 'styled-components';

// HELPERS
export const clearFix = `
   &:before, &:after {
      content: '';
      display: table;
   }

   &:after {
      clear: both;
   }
`;

export const listUnstyled = `
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const truncate = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// THEME
export const theme = {
   fontDefault: `'Montserrat', sans-serif`,

   baseFontSize: '15px',

   regular: 400,
   bold: 500,
   light: 300,

   baseColor: '#484340',
   primary: '#ef3b00',
   blackSecondary: '#2a2b2c',
   brown: '#171513',
   greyLight: '#f7f7f7',
   white: '#ffffff',
   
   textUppercase: 'uppercase',
   textLowercase: 'lowercase',

   xs: '767px', // 767px & below is mobile
   sm: '768px',
   md: '992px',
   lg: '1200px'
};

// MEDIA QUERIES
export const xs = `@media (max-width: ${theme.xs})`;
export const sm = `@media (min-width: ${theme.sm})`;
export const md = `@media (min-width: ${theme.md})`;
export const lg = `@media (min-width: ${theme.lg})`;

// SPRITES
export const homeSprites = `
   background: url('//d3lf10b5gahyby.cloudfront.net/misc/senthil/sprites.png') no-repeat;
   background-size: 65px 284.5px;
`;

// CONTAINERS
export const Container = styled.div`
   ${clearFix};
   padding-left: 16px;
   padding-right: 16px;
   margin-right: auto;
   margin-left: auto;
   width: 100%;

   ${lg} {
      width: 1232px;
   }
`;

export const ContentWrapper = styled.div`
   ${clearFix};
   padding-top: 70px;
`;

// TYPOGRAPHY
export const MainTitle = styled.h1`
   margin-bottom: 24px;
   font-size: 32px;
   font-weight: ${theme.bold};

   ${sm}{
      margin-bottom: 32px;
   }
`;

export const SecondaryTitle= styled.h2`
   margin: 0 0 24px;
   font-weight: 400;
   font-size: 24px;
`;
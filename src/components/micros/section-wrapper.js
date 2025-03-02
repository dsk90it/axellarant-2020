import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import { clearFix } from '../../styles/theme';

const Section = styled.section`
   ${clearFix};
   width: 100%;
   background-color: ${props => props.hasBgColor || null};
   padding: 80px 0;

   ${props => props.hasBgImg && css`
      background: url(${props => props.hasBgImg}) no-repeat;
      background-size: cover;
   `};
`;

const SectionWrapper = ({ bgColor, bgImg, children, as}) => {
   return(
      <Section as={as} hasBgColor={bgColor} hasBgImg={bgImg}>
         {children}
      </Section>
   )
}

SectionWrapper.propTypes = {
   as: PropTypes.string,
   bgColor: PropTypes.string,
   bgImg: PropTypes.string
};

export default SectionWrapper
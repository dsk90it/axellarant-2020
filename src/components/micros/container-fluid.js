import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { clearFix } from '../../styles/theme';

const ContainerFluidWrapper = styled.div`
   ${clearFix};
   width: 100%;
   background-color: ${props => props.hasBgColor || null};

   ${props => props.hasBgImg && css`
      background: url(${props => props.hasBgImg}) no-repeat;
      background-size: cover;
   `};
`;

const ContainerFluid = ({ bgColor, bgImg, children, as}) => {
   return(
      <ContainerFluidWrapper as={as} hasBgColor={bgColor} hasBgImg={bgImg} hasFixedTop={fixedTop}>
         {children}
      </ContainerFluidWrapper>
   )
}

ContainerFluid.propTypes = {
   as: PropTypes.string,
   bgColor: PropTypes.string,
   bgImg: PropTypes.string
};

export default ContainerFluid
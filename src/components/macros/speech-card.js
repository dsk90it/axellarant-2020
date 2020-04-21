import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, homeSprites } from '../../styles/theme';

export const CardWrapper = styled.div`
   display: block;
   width: 100%;
   position: relative;
   background-color: ${theme.white};
   box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
   padding: 32px;
   border-radius: 8px;

   &:after{
      content: '';
      position: absolute;
      left: 40px;
      bottom: 0;
      width: 0;
      height: 0;
      border: 14px solid transparent;
      border-top-color: #ffffff;
      border-bottom: 0;
      border-right: 0;
      margin-left: -7px;
      margin-bottom: -14px;
   }

   p{
      margin: 0;
      text-indent: 30px;
      position: relative;
      color: #847773;

      &:before{
         content: '“';
         font-size: 56px;
         line-height: 1;
         font-weight: ${theme.bold};
         color: ${theme.primary};
         position: absolute;
         left: -30px;
         top: -6px;
      }
   }
`;

const ClientName = styled.div`
   display: block;
   width: 100%;
   position: relative;
   min-height: 64px;
   padding-left: 75px;
   margin-top: 20px;
   padding-top: 16px;

   &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      ${homeSprites};
      background-position: 0px -195px;
      width: 62px;
      height: 63px;
   }

   p{
      margin: 0;
      color: ${theme.brown};
      font-size: 14px;
      line-height: 1;
   }

   span{
      font-size: 12px;
      font-weight: 500;
      color: #bfb2ae;
   }
`;

const SpeechCard = ({text, clientName, org}) => {
   return (
      <Fragment>
         <CardWrapper>
            <p>{text}</p>
         </CardWrapper>

         <ClientName>
            <p>{clientName}</p>
            <span>{org}</span>
         </ClientName>
      </Fragment>
   )
};

SpeechCard.defaultProps = {
   text: 'Mauris at quam at mauris venenatis eleifend. Nullam eleifend Tempor blandit similique vim ne. Esse definitiones ea vis, putant gubergren cum eu. Nullam eleifend Tempor blandit similique vim ne',
   clientName: 'Client Name',
   org: 'Position ORG'
 };

SpeechCard.propTypes = {
   text: PropTypes.string,
   clientName: PropTypes.string,
   org: PropTypes.string
 };

export default SpeechCard

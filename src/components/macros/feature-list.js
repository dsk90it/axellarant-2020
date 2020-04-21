import React from 'react';
import styled from 'styled-components';
import { listUnstyled, clearFix, md, homeSprites, sm, theme } from '../../styles/theme';

const FeaturesListWrapper = styled.ul`
   ${clearFix};
   ${listUnstyled};
   margin: 0 auto;
   width: 100%;

   ${md}{
      width: 613px;
   }

   li{
      float: left;
      width: 100%;
      margin: 8px 0;

      ${sm}{
         width: 33.33%;
         padding: 0 12px;
      }
   }
`;

const FeatureCard = styled.div`
   display: flex;
   align-items: center;
   border: 1px solid rgba(255, 255, 255, 0.2);
   border-radius: 4px;

   ${sm}{
      flex-direction: column;
      justify-content: center;
      text-align: center;
      flex-wrap: wrap;
      min-height: 180px;
      padding: 8px 16px;
   }

   i{
      display: inline-block;
      width: 65px;
      height: 65px;
      transform: scale(0.5);
      ${homeSprites};

      &.team{
         background-position: 0px -130px;
      }
      &.staff{
         background-position: 0px -65px;
      }
      &.folder{
         background-position: 0 0;
      }

      ${sm}{
         transform: none;
      }
   }

   span{
      display: inline-block;
      font-weight: ${theme.bold};

      ${sm}{
         margin-top: 16px;
      }
   }
`;

const FeaturesList = () => {
   return (
      <FeaturesListWrapper>
         <li>
            <FeatureCard>
               <i className="staff"/>
               <span>Service Name</span>
            </FeatureCard>
         </li>
         <li>
            <FeatureCard>
               <i className="team"/>
               <span>Service Name</span>
            </FeatureCard>
         </li>
         <li>
            <FeatureCard>
               <i className="folder"/>
               <span>Service Name</span>
            </FeatureCard>
         </li>
      </FeaturesListWrapper>
   );
 };
 
 export default FeaturesList
 
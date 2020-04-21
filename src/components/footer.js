import React from 'react';
import styled from 'styled-components';
import { theme, Container, homeSprites, xs, sm } from '../styles/theme';

const FooterWrapper = styled.footer`
   padding: 24px 0;
   background-color: ${theme.brown};
   color: ${theme.white};
   display: flex;
   align-items: center;
   width: 100%;
   font-size: 12px;

   ${sm}{
       padding: 32px 0;
    }

    p{
        margin: 0 0 12px;

        ${sm}{
            margin: 0;
        }
    }

   ${Container}{
        display: flex;
        align-items: center;
        
        ${xs}{
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
        }
   }
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${theme.white};

    ${sm}{
        margin-left: auto;
    }

    span{
        margin-right: 8px;
    }

    a{
        display: inline-block;
        margin: 0 6px;

        i{
            width: 16px;
            height: 16px;
            display: inline-block;
            ${homeSprites};

            &.fb{
                background-position: -32px -258px;
            }
            &.in{
                background-position: -48px -258px;
            }
            &.twitter{
                background-position: -16px -268.5px;
            }
            &.twitter{
                background-position: -16px -268.5px;
            }
            &.email{
                background-position: -16px -258px;
                height: 10.5px;
            }
        }
    }
`;

const Footer = () => {
   return (
      <FooterWrapper>
         <Container>
             <p>&copy; 2020 Company. All Rights Reserved.</p>
             <Socials>
                 <span>Follow us on:</span>
                 <a href="/" target="_blank"><i className="fb"/></a>
                 <a href="/" target="_blank"><i className="in"/></a>
                 <a href="/" target="_blank"><i className="twitter"/></a>
                 <a href="/" target="_blank"><i className="email"/></a>
             </Socials>
         </Container>
      </FooterWrapper>
   );
};

export default Footer

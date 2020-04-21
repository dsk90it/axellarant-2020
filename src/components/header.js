import React from 'react';
import styled from 'styled-components';
import { theme, Container, listUnstyled, xs, homeSprites, sm } from '../styles/theme';
import { Button } from './micros/button';

const HeaderWrapper = styled.header`
   position: fixed;
   top: 0;
   right:0;
   left: 0;
   min-height: 70px;
   background-color: ${theme.brown};
   color: ${theme.white};
   display: flex;
   align-items: center;
   flex-direction: row;
   z-index: 10;
`;
const HeaderContainer = styled(Container)`
   display: flex;
   align-items: center;
   flex-direction: row;
`;
const HeaderLeft = styled.div`
   display: flex;
   align-items: center;

   .hamburger-icon{
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 2px;
      position: relative;
      background-color: ${theme.white};
      font-style: normal;

      &:before, &:after{
         content: "";
         position: absolute;
         left: 0px;
         width: 20px;
         height: 2px;
         background-color: ${theme.white};
      }

      &:before{
         top: -6px;
      }

      &:after{
         bottom: -6px;
      }
   }
   
   .logo{
      display: inline-block;

      img{
         display: block;
      }
   }

   .chat-icon{
      display: inline-block;
      ${homeSprites};
      background-position: 0px -258px;
      width: 16px;
      height: 16px;
      text-indent: -9999px;
   }

   ${xs}{
      width: 100%;
      justify-content: space-between;

      .logo{
         display: inline-block;
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
      }
   }

   ${sm}{
      .hamburger-icon, .chat-icon{
         display: none;
      }
   }
`;

const HeaderRight = styled.div`
   margin-left: auto;
   display: flex;
   align-items: center;

   ul{
      display: flex;
      ${listUnstyled};
      font-weight: ${theme.bold};

      li{
         margin-right: 24px;
         
         a{
            display: inline-block;
            color: #afa5a3;

            &:hover{
               opacity: 0.8;
            }
         }

         &.active {
            a{
               color: ${theme.white};
               opacity: 0.8;
            }
         }
      }

      ${xs}{
         flex-wrap: wrap;
         flex-direction: column;
         background-color: ${theme.brown};
         position: absolute;
         top: 100%;
         left: 0;
         right: 0;

         li{
            margin-right: 0;

            a{
               border-top: 1px solid rgba(140, 140, 140, 0.4);
               padding: 16px;
               display: block;
            }
         }

         &.hide{
            display: none;
         }

         &.show{
            display: block;
         }
      }
   }

   ${Button}{
      ${xs}{
         display: none;
      }
      position: relative;
      padding: 8px 16px 9px 35px;

      &:before{
         content: '';
         position: absolute;
         left: 14px;
         top: 9px;
         ${homeSprites};
         background-position: 0px -258px;
         width: 16px;
         height: 16px;
      }
   }
`;

const mobileMenu = () =>{
   const menu = document.querySelector('#headerMenu')

   if (menu.classList.contains('hide')) {
      menu.classList.remove('hide');
      menu.classList.add('show');
   } else {
      menu.classList.add('hide');
      menu.classList.remove('show');
   }
}

const Header = () => {
   return (
      <HeaderWrapper>
         <HeaderContainer>
            <HeaderLeft>
               <i className="hamburger-icon" onClick={mobileMenu} />
               <a className="logo" href="/">
                  <img height="16" src="//d3lf10b5gahyby.cloudfront.net/misc/senthil/logo.png" alt="Company" />
               </a>
               <a className="chat-icon" href="/">Get in touch</a>
            </HeaderLeft>

            <HeaderRight>
               <ul id="headerMenu" className="hide">
                  <li className="active"><a href="/">About</a></li>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">Solutions</a></li>
                  <li><a href="/">Blog</a></li>
               </ul>
               <Button>Get In Touch</Button>
            </HeaderRight>
         </HeaderContainer>
      </HeaderWrapper>
   );
};

export default Header

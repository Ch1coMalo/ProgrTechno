import React from "react";  
import Styled from "styled-components"
import logo from "../Components/logo60.png"

const Styles = Styled.div `

a, .navbar-brand, .navbar-nav .nav-link, .link {
    color: #ffffff;
    text-decoration:none;
    &:hover {
        color: white;
        
    }
}

`
export const Footer = () => (
    <Styles>
    <footer fluid style={{ backgroundColor: '#6c757d', color: '#fff' }} >
    <a style={{padding:'40px'}} class="footer__logo" href="/">
        <img class="footer__logo-img" src={logo} height={30} width={30}  alt=""/> БР
   </a>
    <div class="container footer__container">
            <div class="footer__body">
                    <div class="footer__menu">
        <ul class="footer__menu-list custom-list">
                    <li class="footer__menu-item ">
                        <a class="footer__menu-link" href="/doctors" >Врачи</a>
                    </li>
                   
        </ul>
        
   </div>
   </div>
   </div>
  </footer>
  </Styles>
)
export default Footer;
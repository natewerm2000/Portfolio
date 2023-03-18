import React from "react";
import "./Footer.css"
import {  FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from "./logo.png"
//import { FaCode } from 'react-icons/fa';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <footer className="footer--pin">
    <Box>

      <h1 style={{ color: "white",
                   textAlign: "center", 
                   marginTop: "-50px",
                   }}>

            <FooterLink href="/home">
              <img className = "footLogo" src = {logo} alt = ""/>
            </FooterLink>
      </h1>

      <Container>

        <Row>

          <Column>
            
            <FooterLink href="https://www.linkedin.com/in/nathaniel-alexander-934188196/">
            <FaLinkedin  color =  "#ff0000" size = "57px" width = "100%"/>
            </FooterLink>
          </Column>
          <Column>
            
          </Column>
          <Column>
            
          </Column>
          <Column>
            <FooterLink href="https://github.com/natewerm2000">
            <FaGithub color =  "#ff0000" size = "57px"/>
            </FooterLink>
            
          </Column>
          

        </Row>
        
      </Container>

    </Box>
    </footer>
  );
};
export default Footer;
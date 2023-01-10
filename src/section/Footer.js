import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import li from "../assets/li.png";

import logo from "../assets/logo.png";

import people from "../assets/people.png";

import { Image } from "./Image";
import styles from "./uppersection.module.css";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{ color: "green", textAlign: "center", marginTop: "-50px" }}
      ></h1>
      <Container>
        <Row>
          <Column>
            <Heading>
              <img src={logo} />
            </Heading>
            <FooterLink >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </FooterLink>
            <div className={styles.social}>
            <Image img={fb} />
            <Image img={twitter} />
            <Image img ={li} />
            
              
            </div>
          </Column>
          <Column>
            <Heading>Quick Links</Heading>
            <FooterLink >Web Development</FooterLink>
            <FooterLink>CMS & Commerce</FooterLink>
            <FooterLink>Mobile App Develoment</FooterLink>
            <FooterLink>Digital marketing</FooterLink>
            <FooterLink>UI/UX Design</FooterLink>
          </Column>
          <Column>
            <Heading>Comapny</Heading>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Tearms of Services</FooterLink>
            <FooterLink>Legal Info</FooterLink>
            <FooterLink>Knowledge Base</FooterLink>
            <FooterLink>Contact us</FooterLink>
          </Column>
          <Column>
            <Heading>Subscribe Our Newsletter</Heading>
            <FooterLink>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </FooterLink>
            <div className={styles.footerSearchDiv} >
            <input
              className={styles.footerSearch}
              type="text"
              placeholder="Enter your Email"
            />
            </div>
          </Column>
        </Row>
      </Container>
      <Container >
        <div className={styles.footerImage}>
          
        <Image styler={styles.footerImg} img={people} />
        </div>
      </Container>
    </Box>
  );
};
export default Footer;

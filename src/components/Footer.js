import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import linkedin from '../assets/img/linkedin-icon.svg';
import twitter from '../assets/img/twitter-icon.svg';
import github from '../assets/img/github-icon.svg';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <p>Copyright 2023. All Rights Reserved</p>
          <div className="social-icon">
            <a href="https://github.com/Kasaija-Kenneth/"><img src={github} alt="img" /></a>
            <a href="https://twitter.com/kenn_ug/"><img src={twitter} alt="img" /></a>
            <a href="https://www.linkedin.com/in/kasaija-kenneth/"><img src={linkedin} alt="img" /></a>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

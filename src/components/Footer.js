import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://github.com/Kasaija-Kenneth/"><img src={navIcon1} alt="img" /></a>
            <a href="https://twitter.com/kenn_ug/"><img src={navIcon2} alt="img" /></a>
            <a href="https://www.linkedin.com/in/kasaija-kenneth/"><img src={navIcon3} alt="img" /></a>
          </div>
          <p>Copyright 2022. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className='footer'>
        <Container fluid>
          <Row>
            <Col md={6}>
              {new Date().getFullYear()} © Attex - Coderthemes.com
            </Col>
            <Col md={6}>
              <div className='text-md-end footer-links d-none d-md-block'>
                <Link to='#'>About</Link>
                <Link to='#'>Support</Link>
                <Link to='#'>Contact Us</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

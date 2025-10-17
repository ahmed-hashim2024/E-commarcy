import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row>
          {/*-- Newsletter Section --*/}
          <Col md={3} className="mb-4">
            <h5>NEWSLETTER</h5>
            <p style={{ color: "#ccc" }}>
              Subscribe to get the latest news and exclusive offers.
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter your email"
                aria-label="Recipient's email"
                aria-describedby="button-addon2"
              />
              <Button variant="outline-light" id="button-addon2">
                +
              </Button>
            </InputGroup>
          </Col>

          {/*-- Information Section --*/}
          <Col md={3} className="mb-4">
            <h5>INFORMATION</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>

          {/*-- Help Section --*/}
          <Col md={3} className="mb-4">
            <h5>HELP</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Site Map
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Exchanges & Returns
                </a>
              </li>
            </ul>
          </Col>

          {/*-- Your Account Section --*/}
          <Col md={3} className="mb-4">
            <h5>YOUR ACCOUNT</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Login
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Register
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Order History
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Favorites
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/*-- Copyright Bar --*/}
        <hr style={{ borderColor: "#555" }} />
        <Row>
          <Col className="text-center">
            <p style={{ color: "#ccc" }}>
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED <br />
              Creat By Ahmed Hashim
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

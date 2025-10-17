import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { FaBullseye, FaHeart, FaStar } from "react-icons/fa";

// يمكنك استبدال هذه الصور بصور حقيقية لفريقك
const teamMembers = [
  {
    name: "John Doe",
    title: "CEO & Founder",
    image:
      "https://d26e3f10zvrezp.cloudfront.net/Gallery/ea6e79c7-acc0-405f-b054-d2e1f09920cf-1024x1024.webp",
  },
  {
    name: "Jane Smith",
    title: "Chief Marketing Officer",
    image:
      "https://d26e3f10zvrezp.cloudfront.net/Gallery/81d235df-6598-465b-b404-4748d95ce11e-1024x1024.webp",
  },
  {
    name: "Peter Jones",
    title: "Lead Developer",
    image:
      "https://dmxth3fhxofea.cloudfront.net/Gallery/cc24c80c-8dcb-4757-bc63-b6b232d018a1.png",
  },
];

function AboutPage() {
  return (
    <Container className="my-5">
      {/* --- قسم الهيدر --- */}
      <Row className="align-items-center text-center text-md-start mb-5 pb-5 border-bottom">
        <Col md={6}>
          <h1 className="display-4 fw-bold">
            About <span className="text-success">E-Comarcy</span>
          </h1>
          <p className="lead text-muted">
            We are dedicated to bringing you the best products with unparalleled
            service. Our journey started with a simple idea: to make
            high-quality goods accessible to everyone.
          </p>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <Image
            src="https://png.pngtree.com/thumb_back/fh260/background/20240418/pngtree-supermarket-aisle-interior-blurred-background-image_15664463.jpg"
            fluid
            rounded
          />
        </Col>
      </Row>

      {/* --- قسم قيمنا --- */}
      <Row className="text-center my-5 py-5">
        <Col>
          <h2 className="fw-bold mb-5">Our Values</h2>
        </Col>
        <Row>
          <Col md={4} className="mb-4">
            <FaStar size={50} className="text-success mb-3" />
            <h4 className="fw-bold">Quality First</h4>
            <p className="text-muted">
              We source only the best materials and products, ensuring
              everything you buy from us is of the highest standard.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <FaHeart size={50} className="text-success mb-3" />
            <h4 className="fw-bold">Customer Focus</h4>
            <p className="text-muted">
              You are at the heart of everything we do. We strive to provide an
              exceptional shopping experience and support.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <FaBullseye size={50} className="text-success mb-3" />
            <h4 className="fw-bold">Integrity</h4>
            <p className="text-muted">
              We believe in honesty and transparency in all our dealings, from
              our supply chain to your doorstep.
            </p>
          </Col>
        </Row>
      </Row>

      {/* --- قسم فريق العمل --- */}
      <Row className="text-center my-5 py-5 bg-light rounded-3">
        <Col>
          <h2 className="fw-bold mb-5">Meet Our Team</h2>
        </Col>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col
              key={index}
              md={6}
              lg={3}
              className="mb-4 d-flex justify-content-center"
            >
              <Card style={{ width: "15rem" }} className="border-0 shadow-sm">
                <Card.Img variant="top" src={member.image} />
                <Card.Body>
                  <Card.Title className="fw-bold">{member.name}</Card.Title>
                  <Card.Text className="text-success">{member.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
}

export default AboutPage;

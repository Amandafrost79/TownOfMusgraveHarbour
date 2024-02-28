import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Accordion,
  Carousel,
} from "react-bootstrap";
import "./festival.css";

const Festival = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">Muddy Hole Scuff 'n Scoff Festival</h1>
          <p className="text-center">
            Join us for a week of unforgettable activities and fun for the whole
            family!
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Carousel>
            {/* Carousel items - Replace with actual images */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/path/to/your/image1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Live Music on the Beach</h3>
                <p>
                  Enjoy breathtaking performances with the backdrop of the
                  setting sun.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Add more Carousel.Item blocks for other highlights */}
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="text-center mb-3">Weekly Schedule</h2>
          <Accordion defaultActiveKey="0">
            {/* Accordion item for each day */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Monday - Demolition Derby</Accordion.Header>
              <Accordion.Body>
                {/* Add detailed schedule or description */}
              </Accordion.Body>
            </Accordion.Item>
            {/* Repeat for each day/event */}
          </Accordion>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Feature Card for Each Main Event */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/path/to/your/image2.jpg" />
            <Card.Body>
              <Card.Title>Demolition Derby</Card.Title>
              <Card.Text>
                Experience the thrill of the demolition derby, a festival
                favorite!
              </Card.Text>
              <Button variant="primary">More Info</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Repeat for other main events */}
      </Row>
    </Container>
  );
};

export default Festival;

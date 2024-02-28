import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  ListGroup,
} from "react-bootstrap";

const Community = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">Welcome to Our Community</h1>
        </Col>
      </Row>

      {/* Events and Happenings Section */}
      <Row>
        <Col md={6}>
          <h2>Upcoming Events</h2>
          <ListGroup>
            <ListGroup.Item>Music Festival - June 12</ListGroup.Item>
            <ListGroup.Item>Art Exhibition - July 19</ListGroup.Item>
            {/* Add more events */}
          </ListGroup>
        </Col>

        <Col md={6}>
          <h2>Local News</h2>
          {/* Example news item */}
          <Card>
            <Card.Body>
              <Card.Title>Community Cleanup Success</Card.Title>
              <Card.Text>
                Our annual community cleanup brought together over 100
                residents...
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Add more news items */}
        </Col>
      </Row>

      {/* Community Details Section */}
      <Row className="my-4">
        <Col md={12}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Community History</Accordion.Header>
              <Accordion.Body>Our town was founded in 1834...</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Public Library</Accordion.Header>
              <Accordion.Body>
                Our library offers a wide range of books...
              </Accordion.Body>
            </Accordion.Item>
            {/* Add more sections as needed */}
          </Accordion>
        </Col>
      </Row>

      {/* Business Directory Section */}
      <Row className="my-4">
        <Col md={12}>
          <h2>Business Directory</h2>
          <Row>
            {/* Example business listing */}
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Jane's Cafe</Card.Title>
                  <Card.Text>A cozy spot for coffee and pastries.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more businesses */}
          </Row>
        </Col>
      </Row>

      {/* Additional sections for Recreation, etc. can be added here following the same pattern */}
    </Container>
  );
};

export default Community;

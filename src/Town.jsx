import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  ListGroup,
  Table,
} from "react-bootstrap";

const Town = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">
            Welcome to The Town of Musgrave Harbour
          </h1>
        </Col>
      </Row>

      {/* Town Council and Staff Section */}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Town Council</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Council Member 1</ListGroup.Item>
                {/* Add more council members */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Town Staff</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Staff Member 1 - Position</ListGroup.Item>
                {/* Add more staff members */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Mayor's Message */}
      <Row className="my-4">
        <Col>
          <Card>
            <Card.Header>Mayor's Message</Card.Header>
            <Card.Body>
              <Card.Text>A message from the mayor...</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tax and Fee Structure */}
      <Row className="my-4">
        <Col>
          <h2>Tax and Fee Structure</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Service</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service 1</td>
                <td>$XX.XX</td>
              </tr>
              {/* Add more services and fees */}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Hours of Operation and Meeting Schedule */}
      <Row>
        <Col md={6}>
          <h3>Hours of Operation</h3>
          <p>Monday - Friday: 9 AM - 5 PM</p>
          {/* Add additional hours */}
        </Col>
        <Col md={6}>
          <h3>Meeting Schedule</h3>
          <p>Council Meetings: First Monday of every month at 7 PM</p>
          {/* Add more schedules */}
        </Col>
      </Row>

      {/* Minutes and More */}
      <Row className="my-4">
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Meeting Minutes</Accordion.Header>
              <Accordion.Body>
                Detailed minutes from past meetings...
                {/* Link to documents or detail minutes */}
              </Accordion.Body>
            </Accordion.Item>
            {/* Add more items for additional information */}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Town;

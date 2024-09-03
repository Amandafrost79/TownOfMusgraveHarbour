import React from "react";
import { Card, ListGroup, Col } from "react-bootstrap";

const ListCard = ({ title, items, columnClass = 6 }) => {
  return (
    <Col md={columnClass} className="mb-3">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ListGroup variant="flush">
            {items.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListCard;

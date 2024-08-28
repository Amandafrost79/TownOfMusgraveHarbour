import React from "react";
import { Card, Col } from "react-bootstrap";

const DirectoryCard = ({
  imgSrc,
  imgAlt,
  title,
  text,
  columnClass = "col-md-4",
  marginBottom = "mb-3",
}) => {
  return (
    <Col className={`${columnClass} ${marginBottom}`}>
      <Card>
        <Card.Img variant="top" src={imgSrc} alt={imgAlt} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DirectoryCard;

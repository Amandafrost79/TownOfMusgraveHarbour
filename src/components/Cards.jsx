import React from "react";
import { Card, Col } from "react-bootstrap";

const Cards = ({
  imgSrc,
  imgAlt,
  title,
  text,
  columnClass = 4,
  marginBottom = "mb-3",
  isLarge = false,
}) => {
  return (
    <Col md={columnClass} className={` ${marginBottom}`}>
      <Card>
        <Card.Img
          variant="top"
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: "100%",
            height: isLarge ? "300px" : "200px",
          }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;

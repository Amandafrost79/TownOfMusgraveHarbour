import React from "react";
import { Container, Row, Col, Card, Accordion, Button } from "react-bootstrap";
import "./firedept.css";

const FireDept = () => {
  // Dummy data for demonstration
  const teamMembers = [
    {
      name: "Chief John Doe",
      role: "Fire Chief",
      imagePath: "/path/to/chief.jpg",
    },
    // Add more team members as needed
  ];

  const achievements = [
    {
      year: "2022",
      achievements: [
        "Awarded Best Fire Department in the Region",
        "100% Success in Emergency Responses",
      ],
    },
    // Add more achievements as needed
  ];

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">Musgrave Harbour Fire Department</h1>
          <p className="text-center">
            Dedicated to saving lives and protecting property.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        {teamMembers.map((member, index) => (
          <Col md={4} key={index}>
            <Card className="mb-3">
              <Card.Img variant="top" src={member.imagePath} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        <Col>
          <h2 className="text-center mb-3">Achievements</h2>
          <Accordion defaultActiveKey="0">
            {achievements.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{item.year}</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {item.achievements.map((achievement, aIndex) => (
                      <li key={aIndex}>{achievement}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FireDept;

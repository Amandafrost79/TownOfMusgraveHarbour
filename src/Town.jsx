import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  ListGroup,
  Table,
  Carousel,
} from "react-bootstrap";

const Town = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">
            Welcome to The Town of Musgrave Harbour
          </h1>{" "}
          <br />
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/town4.jpg"
                alt="First slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/town3.jpg"
                alt="Second slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/town2.jpg"
                alt="Third slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/bwater1.jpg"
                alt="Fourth slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/sunset.jpg"
                alt=" Fifth slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/rink2.jpg"
                alt="Sixth slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/office.jpg"
                alt="Seventh slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Add more items as needed */}
          </Carousel>
        </Col>
      </Row>

      {/* Town Council and Staff Section */}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Town Council</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Jason Chaulk - Mayor</ListGroup.Item>
                <ListGroup.Item>Bobby Pinsent - Deputy Mayor</ListGroup.Item>
                <ListGroup.Item>Grant Abbott - Councillor</ListGroup.Item>
                <ListGroup.Item>Kelly Croucher - Councillor</ListGroup.Item>
                <ListGroup.Item>Keith Guy - Councillor</ListGroup.Item>
                <ListGroup.Item>Vic Guy - Councillor</ListGroup.Item>
                <ListGroup.Item>Claudine Mouland - Councillor</ListGroup.Item>

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
                <ListGroup.Item>Amber Littlejohn - Town Clerk</ListGroup.Item>
                <ListGroup.Item>
                  Amanda Frost - Assistant Town Clerk
                </ListGroup.Item>
                <ListGroup.Item>Ryan Fahey - Full-Time Operator</ListGroup.Item>
                <ListGroup.Item>
                  Dillan Hunt - Full-Time Operator
                </ListGroup.Item>
                <ListGroup.Item>
                  Quinton Pardy - Call-In Operator
                </ListGroup.Item>
                <ListGroup.Item>Cathy Chaulk - Park Coordinator</ListGroup.Item>
                <ListGroup.Item>Jenny Pinsent - Janitor</ListGroup.Item>

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
              <Card.Text>
                <p>Dear Residents of Musgrave Harbour,</p>

                <p>
                  As we embark on another chapter in the history of our beloved
                  town, I am filled with pride and gratitude for the resilience
                  and spirit of our community. Musgrave Harbour, nestled along
                  the stunning coastline of Newfoundland, holds a special place
                  in the hearts of its residents past and present.
                </p>

                <p>
                  Our town is renowned for its breathtaking 7 kilometers of
                  pristine white sand beach, a treasure that stretches from the
                  local Fisherman's Museum to the hallowed grounds of the
                  Banting Memorial Park. It's here, amidst the tranquil beauty
                  of our shores, that we honor the memory of Sir Frederick
                  Banting, the pioneering discoverer of insulin, whose life was
                  tragically lost at the Banting crash site in 1941.
                </p>

                <p>
                  Musgrave Harbour, with its roots deeply embedded in our
                  fishing heritage, stands as a testament to the indomitable
                  spirit of our people. We've weathered countless storms and
                  faced numerous challenges, yet we emerge stronger and more
                  resilient with each passing year.
                </p>

                <p>
                  In these ever-changing and challenging times, the Council and
                  staff of the Town of Musgrave Harbour remain steadfast in our
                  commitment to making our community the best it can be. Despite
                  the uphill battle before us, we are dedicated to fostering
                  growth, prosperity, and a vibrant future for all.
                </p>

                <p>
                  I urge each and every one of you to reach out and connect with
                  us at the Town Office. Whether you have concerns to address or
                  a desire to contribute through volunteerism, your input and
                  involvement are invaluable. Together, hand in hand, we can
                  elevate our little town to soaring new heights.
                </p>

                <p>
                  As we look ahead with optimism and determination, let us draw
                  strength from the rich tapestry of our shared history and the
                  boundless potential of our collective efforts. Musgrave
                  Harbour is not just a place on the map – it's a community of
                  resilient souls, united in purpose and pride.
                </p>

                <p>
                  Thank you for your unwavering dedication and commitment to our
                  town. Together, we will continue to shape the bright future
                  that Musgrave Harbour deserves.
                </p>

                <p>Warm regards,</p>

                <strong>
                  Jason Chaulk <br />
                  Mayor of Musgrave Harbour
                </strong>
              </Card.Text>
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
          <p>Monday - Friday: 8 AM - 4 PM</p>
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

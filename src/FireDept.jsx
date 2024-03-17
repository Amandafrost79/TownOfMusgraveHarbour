import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Tabs,
  Tab,
  Modal,
  Button,
  Carousel,
  Alert,
} from "react-bootstrap";
import "./firedept.css";

const FireDept = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className="text-center mb-4">
            Musgrave Harbour Volunteer Fire Department
          </h1>

          {/* Carousel: Highlighting the Department's Activities */}
          <Carousel className="mb-4">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/FireHall.JPG"
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
                src="TownOfMusgraveHarbour/images/FireHall2.JPG"
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
                src="TownOfMusgraveHarbour/images/members.JPG"
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
                src="TownOfMusgraveHarbour/images/training.JPG"
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
                src="TownOfMusgraveHarbour/images/training2.JPG"
                alt="Fifth slide"
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
            {/* Add more Carousel.Item as needed */}
          </Carousel>

          {/* Tabs: Section for About, Members, Training, and Recruitment */}
          <Tabs
            defaultActiveKey="about"
            className="mb-4"
            id="department-info-tabs"
          >
            <Tab eventKey="about" title="About">
              <p>
                Our volunteer fire department has been serving the community
                since [year], providing emergency response services and fire
                prevention education.
              </p>
            </Tab>
            <Tab eventKey="members" title="Members">
              <ListGroup>
                <ListGroup.Item>John Doe - Fire Chief</ListGroup.Item>
                <ListGroup.Item>Jane Smith - Deputy Fire Chief</ListGroup.Item>
                {/* Add more members */}
              </ListGroup>
            </Tab>
            <Tab eventKey="training" title="Training">
              <p>
                Our department offers comprehensive training programs covering
                firefighting techniques, emergency medical services, and fire
                prevention.
              </p>
            </Tab>
            <Tab eventKey="recruitment" title="Recruitment">
              <p>
                Interested in joining our team? Click the button below to learn
                more about the recruitment process and how you can apply.
              </p>
              <Button variant="primary" onClick={handleShowModal}>
                Learn More
              </Button>
            </Tab>
          </Tabs>
          <br />

          {/* Modal for Recruitment Details */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Join Our Volunteer Fire Department</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Discover the rewards of serving your community as a volunteer
                firefighter. We provide all the necessary training and
                equipment. Apply today!
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseModal}>
                Apply Now
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Alert: Fire Safety Tip of the Month */}
          <Alert variant="info" className="mb-4">
            <Alert.Heading>Fire Safety Tip of the Month</Alert.Heading>
            <p>
              Ensure smoke detectors are functional and test them monthly. Plan
              and practice home evacuation routes with all family members.
            </p>
          </Alert>

          {/* Additional sections or elements can be added here */}
        </Col>
      </Row>
    </Container>
  );
};

export default FireDept;

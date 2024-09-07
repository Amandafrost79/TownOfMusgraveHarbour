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
  Alert,
} from "react-bootstrap";
import "./firedept.css";
import Carousel from "../components/Carousel";
import ListCard from "../components/ListCard";

const fireDeptImgs = [
  { src: "images/FireHall.JPG", alt: "1 image" },
  { src: "images/FireHall2.JPG", alt: "2 image" },
  { src: "images/members.JPG", alt: "3 image" },
  { src: "images/training.JPG", alt: "4 image" },
  { src: "images/training2.JPG", alt: "5 image" },
  { src: "images/firetrain.jpg", alt: "6 image" },
  { src: "images/firekids.jpg", alt: "7 image" },
];

const fireMembers = [
  "Grant Pinsent - Fire Chief",
  "Jason Chaulk - Deputy Fire Chief",
  "Brent Croucher - Assistant Chief",
  "Curtis Hicks - Assistant Chief",
  "Bobby Pinsent - Captain",
  "Mickey Pinsent - Captain",
  "Junior Critchley - Captain",
  "Todd Stokes - Lieutenant/Secretary",
  "David Guy - Lieutenant",
  "Ryan Fahey - Lieutenant",
  "Mitchell Mouland - Lieutenant",
  "Nadine Hicks - Treasurer",
  "Hiliary Hickey - Fire Protection Officer",
  "John Hicks - Firefighter",
  "Tyler Blackwood - Firefighter",
  "Derrick Abbott - Firefighter",
  "Sheldon Mouland - Firefighter",
  "Wade Mouland - Firefighter",
  "Keith Mouland - Firefighter",
  "Jason Mouland - Firefighter",
  "Joshua Hicks - Firefighter",
  "Frank Butler - Firefighter",
  "Danny Abbott - Firefighter",
  "Trent Abbott - Firefighter",
  "Elaine Blackwood - Firefighter",
  "Devon Abbott - Firefighter",
  "Dillan Hunt - Firefighter",
  "Jordan Blackwood - Firefighter",
];

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

          <Carousel imageArray={fireDeptImgs} marginBottom="mb-0" />

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
              <ListCard title="Members" items={fireMembers} columnClass={12} />
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

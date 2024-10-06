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
import Carousel from "../components/Carousel";
import ListCard from "../components/ListCard";
import TabsComponent from "../components/TabsComponent";

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

  const tabsData = [
    {
      title: "About",
      content: (
        <p>
          Our volunteer fire department has been serving the community since
          [year], providing emergency response services and fire prevention
          education.
        </p>
      ),
    },
    {
      title: "Members",
      content: (
        <ListCard title="Members" items={fireMembers} columnClass={12} />
      ),
    },
    {
      title: "Training",
      content: (
        <p>
          Our department offers comprehensive training programs covering
          firefighting techniques, emergency medical services, and fire
          prevention.
        </p>
      ),
    },
    {
      title: "Recruitment",
      content: (
        <div>
          <p>
            Interested in joining our team? Click the button below to learn more
            about the recruitment process and how you can apply.
          </p>
          <Button variant="primary" onClick={handleShowModal}>
            Learn More
          </Button>
        </div>
      ),
    },
  ];

  // FireDept.js (inside your component file)
  const fireSafetyTips = [
    {
      title: "Install Smoke Alarms",
      imgSrc: "images/smokedetect.jpeg",
      alt: "Smoke Alarm",
      description:
        "Install smoke alarms on every level of your home, inside bedrooms, and outside sleeping areas. Test them every month.",
    },
    {
      title: "Plan Your Escape",
      imgSrc: "images/fireescape.jpg",
      alt: "Escape Plan",
      description:
        "Create a home fire escape plan and practice it at least twice a year with all members of your household.",
    },
    {
      title: "Stay in the Kitchen",
      imgSrc: "images/kitchenfire.jpeg",
      alt: "Kitchen Safety",
      description:
        "Never leave cooking unattended. If you must leave the kitchen, turn off the stove.",
    },
    {
      title: "Keep Flammables Away",
      imgSrc: "images/flammables.jpg",
      alt: "Keep Flammables Away",
      description:
        "Keep flammable items, like towels and paper, away from the stove and other heat sources.",
    },
  ];

  return (
    // FireDept.js (inside your component return statement)

    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className="text-center mb-4">
            Musgrave Harbour Volunteer Fire Department
          </h1>

          <Carousel imageArray={fireDeptImgs} marginBottom="mb-0" />

          {/* Use the reusable TabsComponent */}
          <TabsComponent
            tabs={tabsData}
            defaultActiveKey="0"
            className="mb-4"
          />

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

          {/* Fire Safety Section */}
          <h2 className="mt-4">Fire Safety</h2>

          {/* Alert: Fire Safety Tip of the Month */}
          <Alert variant="info" className="mb-4">
            <Alert.Heading>Fire Safety Tip of the Month</Alert.Heading>
            <p>
              Ensure smoke detectors are functional and test them monthly. Plan
              and practice home evacuation routes with all family members.
            </p>
          </Alert>

          {/* Display Fire Safety Tips with Images */}
          <Row className="mt-4">
            {fireSafetyTips.map((tip, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <Card>
                  <Card.Img variant="top" src={tip.imgSrc} alt={tip.alt} />
                  <Card.Body>
                    <Card.Title>{tip.title}</Card.Title>
                    <Card.Text>{tip.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FireDept;

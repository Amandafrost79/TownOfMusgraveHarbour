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
import "./town.css";
import Carousel from "../components/Carousel";

const townImages = [
  { src: "TownOfMusgraveHarbour/images/town3.jpg", alt: "First slide" },
  { src: "TownOfMusgraveHarbour/images/town4.jpg", alt: "Second slide" },
  { src: "TownOfMusgraveHarbour/images/town2.jpg", alt: "Third slide" },
  { src: "TownOfMusgraveHarbour/images/bwater1.jpg", alt: "Fourth slide" },
  { src: "TownOfMusgraveHarbour/images/sunset.jpg", alt: "Fifth slide" },
  { src: "TownOfMusgraveHarbour/images/rink2.jpg", alt: "Sixth slide" },
  { src: "TownOfMusgraveHarbour/images/office.jpg", alt: "Seventh slide" },
];

const Town = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">
            Welcome to The Town of Musgrave Harbour
          </h1>{" "}
          <br />
          <Carousel imageArray={townImages} />
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
                <ListGroup.Item>Amanda Frost - Finance Officer</ListGroup.Item>
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
          <h2>Tax and Fee Structure 2024</h2>
          <Table striped bordered hover className="table-fixed-layout">
            <thead>
              <tr>
                <th>Property Tax Rates</th>
                <th className="fee-column">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Residential Property Tax</td>
                <td>9.5 Mills</td>
              </tr>
              <tr>
                <td>Minimum Property Tax</td>
                <td>$450/Year</td>
              </tr>
              <tr>
                <td>Vacant land Property Tax</td>
                <td>$450/Year</td>
              </tr>
              <tr>
                <td>Commercial Property Tax</td>
                <td>10 Mils</td>
              </tr>
              <tr>
                <td>Minimum Commercial Property Tax</td>
                <td>$475/Year</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover className="table-fixed-layout">
            <thead>
              <tr>
                <th>Residential Water & Sewer Tax Rates</th>
                <th className="fee-column">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Residential</td>
                <td>$516/Year</td>
              </tr>
              <tr>
                <td>Apartments (per unit)</td>
                <td>$516/Year</td>
              </tr>
              <tr>
                <td>B&B's/AirB&B's (per unit)</td>
                <td>$516/Year</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover className="table-fixed-layout">
            <thead>
              <tr>
                <th>Commercial Water & Sewer Tax Rates</th>
                <th className="fee-column">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Schools/Government Buildings</td>
                <td>$4116/Year</td>
              </tr>
              <tr>
                <td>Motels/Seniors Home</td>
                <td>$1584/Year</td>
              </tr>
              <tr>
                <td>
                  Lounges/Restaurants/Grocery Stores/Salons/Convience
                  Stores/Funeral Homes
                </td>
                <td>$750/Year</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover className="table-fixed-layout">
            <thead>
              <tr>
                <th>Water Only</th>
                <th className="fee-column">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Residential</td>
                <td>$396/Year</td>
              </tr>
              <tr>
                <td>Commercial</td>
                <td>$600/Year</td>
              </tr>
              <tr>
                <td>Fish Plants</td>
                <td>$1200/Year</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover className="table-fixed-layout">
            <thead>
              <tr>
                <th>Garbage Collection</th>
                <th className="fee-column">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Residential</td>
                <td>$179/Year</td>
              </tr>
              <tr>
                <td>government Buildings/Seniors Homes</td>
                <td>$3600/Year</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover className="table-fixed-layout">
            <thead>
              <tr>
                <th>Business Tax (Based on Assessment Value)</th>
                <th className="fee-column">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grocery/Hardware/Pharmacy and other Retail</td>
                <td>36 Mills</td>
              </tr>
              <tr>
                <td>Restaurants/Garages/Service Stations</td>
                <td>30 Mills</td>
              </tr>
              <tr>
                <td>Lounges</td>
                <td>18 mills</td>
              </tr>
              <tr>
                <td>B&B's/AirB&B's</td>
                <td>10 Mills</td>
              </tr>
              <tr>
                <td>Senior Citizen Homes</td>
                <td>5 Mills</td>
              </tr>
              <tr>
                <td>Fish Plants/Funeral Parlour/Motel</td>
                <td>42 mills</td>
              </tr>
              <tr>
                <td>Utilities</td>
                <td>2.5%</td>
              </tr>
              <tr>
                <td>Minimum Business Tax</td>
                <td>$425/Year</td>
              </tr>
              <tr>
                <td>Home-Based Business</td>
                <td>$100/Year</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover className="table-fixed-layout">
            <thead>
              <tr>
                <th>Fees and Permits</th>
                <th className="fee-column">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contractor Permit</td>
                <td>$4.00 per $1000 Construction Value. $100 Minimum</td>
              </tr>
              <tr>
                <td>Building Permit Commercial</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Building Permit Residential</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>Building Permit Demolition</td>
                <td>$25</td>
              </tr>
              <tr>
                <td>Vendor's Permit Daily</td>
                <td>$25</td>
              </tr>
              <tr>
                <td>Vendor's Permit Monthly</td>
                <td>$75</td>
              </tr>
              <tr>
                <td>Curb Stop Shut Off</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>Curb Stop Turned On</td>
                <td>$50</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover className="table-fixed-layout">
            <thead>
              <tr>
                <th>Other</th>
                <th className="fee-column">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tax Certificate</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Photocopies</td>
                <td>$0.50/Page</td>
              </tr>
              <tr>
                <td>Fax</td>
                <td>$2</td>
              </tr>
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

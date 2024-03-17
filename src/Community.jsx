import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  ListGroup,
  Carousel,
} from "react-bootstrap";
import "./community.css";

const Community = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">Get To Know Musgrave Harbour</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/bwater6.jpg"
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
                src="TownOfMusgraveHarbour/images/oldplane.jpeg"
                alt="Second slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/gillkids.jpg"
                alt="Third slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="TownOfMusgraveHarbour/images/town1.jpg"
                alt="Third slide"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Add more items as needed */}
          </Carousel>
        </Col>
      </Row>

      {/* Events and Happenings Section */}
      <Row>
        <Col md={6}>
          <h2>Upcoming Events</h2>
          <ListGroup>
            <ListGroup.Item>
              Muddy Hole Scuff 'n Scoff Festival - August 5 - 11
            </ListGroup.Item>
            <ListGroup.Item>Art Exhibition - July 19</ListGroup.Item>
            {/* Add more events */}
          </ListGroup>
        </Col>

        <Col md={6}>
          <h2>Local News</h2>
          {/* Example news item */}
          <Card>
            <Card.Body>
              <Card.Title>Community Cleanup Success</Card.Title>
              <Card.Text>
                Our annual community cleanup brought together over 100
                residents...
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Add more news items */}
        </Col>
      </Row>

      {/* Community Details Section */}
      <Row className="my-4">
        <Col md={12}>
          <Accordion defaultActiveKey="0">
            {/* Fisherman's Museum Section */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Fisherman's Museum</Accordion.Header>
              <Accordion.Body>
                <p>
                  Discover the maritime history and the heritage of our
                  community through the exhibits and collections at the
                  Fisherman's Museum. From ancient fishing techniques to modern
                  conservation efforts, the museum offers a deep dive into the
                  life of the community's past generations.
                </p>

                {/* Example image in the accordion body */}
                <Card className="mb-2">
                  <Card.Img
                    variant="top"
                    src="TownOfMusgraveHarbour/images/museum.JPG"
                    alt="Fisherman's Museum"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "500px",
                    }}
                  />
                  <Card.Body>
                    <Card.Text>
                      <p>
                        The Fishermen’s Union Trading Company Cash Store is
                        recognized for its historic, aesthetic and cultural
                        values.
                      </p>{" "}
                      <p>
                        The Fishermen’s Union Trading Company Cash Store has
                        historic value due to its age and its origins as a
                        Fishermen's Protective Union (FPU) store. In 1908
                        William Coaker formed the first organized protest
                        movement among Newfoundland fishers, the Fishermen's
                        Protective Union (FPU). The FPU functioned in part as a
                        cooperative, attempting to weaken the monopoly of
                        merchants on purchasing and exporting fish and on
                        retailing supplies. This included opening stores under
                        the Fishermen’s Union Trading Company (FUTC). Musgrave
                        Harbour was a strong site for the FPU movement, with a
                        local FPU council established in 1909, and the first
                        FUTC store in Newfoundland opening at Doting Cove in
                        1911. This store was also referred to as the Union Cash
                        Store, as part of its original purpose was to have
                        fishing families deal in cash rather than credit or
                        barter as with the merchant system.
                      </p>{" "}
                      <p>
                        The Fishermen’s Union Trading Company Cash Store has
                        aesthetic value as one of the most distinctive buildings
                        in Musgrave Harbour, and one which evokes a sense of
                        time and place, set against the seascape. Its vernacular
                        design, simple rectangular form, low-pitched roof, wood
                        post foundation, narrow clapboard siding and
                        cornerboards, and wooden windows and doors are typical
                        for the time and place in which it was built. These
                        combine with telltale features like exterior double
                        doors on both floors and large window openings, and
                        original interior features like wooden floors and
                        ceilings, visible posts and beams, and retail shelving,
                        all of which make the building readily identifiable as
                        an historic general store.
                      </p>{" "}
                      <p>
                        The Fishermen’s Union Trading Company Cash Store also
                        has cultural value as it has operated as a museum since
                        1977.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                {/* Add more images or text as needed */}
              </Accordion.Body>
            </Accordion.Item>

            {/* The Breakwater Youth Center Section */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>The Breakwater Youth Center</Accordion.Header>
              <Accordion.Body>
                <p>
                  The Breakwater Youth Center is a vibrant hub for the young
                  people in our community. Offering a variety of programs,
                  workshops, and activities, it's a place where youth can learn,
                  socialize, and grow in a supportive environment.
                </p>
                {/* You can also include images or additional content here */}
              </Accordion.Body>
            </Accordion.Item>

            {/* Community History Section */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Community History</Accordion.Header>
              <Accordion.Body>
                <p>
                  Musgrave Harbour, NL, incorporated as a town in 1954,
                  population 1053 (2011c), 1085 (2006c). First incorporated as
                  the Rural District Council of Musgrave Harbour and Doting
                  Cove, the Town of Musgrave Harbour is located on the
                  northeastern coast of Newfoundland at the mouth of Hamilton
                  Sound, 100 km east of Gander. First known as Muddy Hole, the
                  name of the shallow cove on which the community is situated,
                  its name was changed in 1866 in honour of Sir Anthony
                  Musgrave, the reigning governor of Newfoundland. Musgrave
                  Harbour was primarily a fishing community with the in-shore
                  fishery being the mainstay due to the lack of a good harbour
                  for use by bigger boats.
                </p>
                <Card className="mb-2">
                  <Card.Img
                    variant="top"
                    src="TownOfMusgraveHarbour/images/oldie1.JPG"
                    alt="Fisherman's Museum"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "400px",
                    }}
                  />
                  <Card.Body>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Gill Memorial Academy</Accordion.Header>
              <Accordion.Body>
                <Card className="mb-2">
                  <Card.Img
                    variant="top"
                    src="TownOfMusgraveHarbour/images/school.jpg"
                    alt="Gill Memorial Academy"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "400px",
                    }}
                  />
                  <Card.Body>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            {/* Add more sections as needed */}
          </Accordion>
        </Col>
      </Row>

      {/* Business Directory Section */}
      <Row className="my-4">
        <Col md={12}>
          <h2>Business Directory</h2>
          <Row>
            {/* Example business listing with image */}
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/D&M.jpeg"
                  alt="D&M Services"
                />
                <Card.Body>
                  <Card.Title>D&M Services</Card.Title>
                  <Card.Text>
                    Gas Station & Liquor Store <br />
                    709-655-2100
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more businesses with similar structure */}

            {/* Example for another business */}
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/muddyshag.JPG"
                  alt="muddy shag"
                />
                <Card.Body>
                  <Card.Title>Muddy Shag Lounge</Card.Title>
                  <Card.Text>
                    Local Bar and Pub <br /> 709-655-2300
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/straight.JPG"
                  alt="Straight Shore"
                />
                <Card.Body>
                  <Card.Title>Straight Shore Lounge</Card.Title>
                  <Card.Text>
                    Local Bar and Pub <br /> 709-655-2304
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/rockyridge.jpg"
                  alt="Rocky Ridge"
                />
                <Card.Body>
                  <Card.Title>Rocky Ridge Diner</Card.Title>
                  <Card.Text>
                    Local Restaurant <br /> 709-655-2120
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/general.JPG"
                  alt="general store"
                />
                <Card.Body>
                  <Card.Title>The General Store</Card.Title>
                  <Card.Text>
                    Local Grocery Store <br /> 709-655-2215
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/rain.jpeg"
                  alt="rain guard"
                />
                <Card.Body>
                  <Card.Title>Rain Guard</Card.Title>
                  <Card.Text>
                    Metal Roofing Systems <br /> 709-693-3963
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/spindrift.jpeg"
                  alt="muddy shag"
                />
                <Card.Body>
                  <Card.Title>Spindrift Counrty Inn & Cottages</Card.Title>
                  <Card.Text>
                    Hotel and Restaurant <br /> 709-655-2175
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/bobby.JPG"
                  alt="Pinsent Brothers"
                />
                <Card.Body>
                  <Card.Title>Pinsent Brothers contracting Ltd.</Card.Title>
                  <Card.Text>
                    Local Contracting <br /> 709-424-4860
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/chris.jpeg"
                  alt="Pinsent cabinets"
                />
                <Card.Body>
                  <Card.Title>Pinsent's Custom Kitchen Cabinets</Card.Title>
                  <Card.Text>
                    Local Cabinent Building <br /> 709-631-3065
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/hvac.jpeg"
                  alt="Hvac"
                />
                <Card.Body>
                  <Card.Title>Triple J HVAC</Card.Title>
                  <Card.Text>
                    HVAC Install and Service <br /> 709-534-6112
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="TownOfMusgraveHarbour/images/jjj.jpeg"
                  alt="Divinyley Cut"
                />
                <Card.Body>
                  <Card.Title>Divinyley Cut</Card.Title>
                  <Card.Text>
                    Custom Gifts
                    <br /> 709-534-7427
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Additional sections for Recreation, etc. can be added here following the same pattern */}
    </Container>
  );
};

export default Community;

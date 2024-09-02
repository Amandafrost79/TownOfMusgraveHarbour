import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import "./community.css";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";

const communityImages = [
  { src: "images/bwater6.jpg", alt: "First slide" },
  { src: "images/oldplane.jpeg", alt: "Second slide" },
  { src: "images/gillkids.jpg", alt: "Third slide" },
  { src: "images/town1.jpg", alt: "Fourth slide" },
  { src: "images/bonfire1.png", alt: "Fifth slide" },
  { src: "images/boat1.jpg", alt: "Sixth slide" },
  { src: "images/town5.jpg", alt: "Seventh slide" },
];

const businessDirectoryData = [
  {
    imgSrc: "images/D&M.jpeg",
    imgAlt: "D&M Services",
    title: "D&M Services",
    text: "Gas Station & Liquor Store\n709-655-2100",
  },
  {
    imgSrc: "images/muddyshag.jpg",
    imgAlt: "Muddy Shag Lounge",
    title: "Muddy Shag Lounge",
    text: "Bar and Pub\n709-655-2300",
  },
  {
    imgSrc: "images/straight.JPG",
    imgAlt: "Straight Shore",
    title: "Straight Shore Lounge",
    text: "Bar and Pub\n709-655-2304",
  },
  {
    imgSrc: "images/rockyridge.jpg",
    imgAlt: "Rocky Ridge",
    title: "Rocky Ridge Diner",
    text: "Restaurant\n709-655-2120",
  },
  {
    imgSrc: "images/general.JPG",
    imgAlt: "General Store",
    title: "The General Store",
    text: "Grocery Store\n709-655-2215",
  },
  {
    imgSrc: "images/rain.jpeg",
    imgAlt: "rain guard",
    title: "Rain Guard",
    text: "Metal Roofing Systems\n709-693-3963",
  },
  {
    imgSrc: "images/spindrift.jpeg",
    imgAlt: "spindrift",
    title: "Spindrift Counrty Inn & Cottages",
    text: "Hotel and <Restaurant\n709-655-2175",
  },
  {
    imgSrc: "images/bobby.JPG",
    imgAlt: "pinsent brothers",
    title: "Pinsent Brothers Contracting Ltd.",
    text: "Contractor\n709-424-4860",
  },
  {
    imgSrc: "images/chris.jpeg",
    imgAlt: "pinsents cabinets",
    title: "Pinsent's Custom Kitchen Cabinets",
    text: "Cabinent Building\n709-631-3065",
  },
  {
    imgSrc: "images/hvac.jpeg",
    imgAlt: "Hvac",
    title: "Triple J HVAC",
    text: "HVAC Install and Service\n709-534-6112",
  },
  {
    imgSrc: "images/jjj.jpeg",
    imgAlt: "divinyley cut",
    title: "Divinyley Cut",
    text: "Custom Gifts\n709-534-7427",
  },
  {
    imgSrc: "images/oldbrook.jpg",
    imgAlt: "old brook cottages",
    title: "Old Brook Cottages",
    text: "Cabin Rentals\n709-655-",
  },
  {
    imgSrc: "images/oldsalt.JPG",
    imgAlt: "old saltbox",
    title: "The Old Saltbox",
    text: "Aunt Donna's AirBnB\n709-",
  },
];

const Community = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">
            Get To Know Musgrave Harbour... Our Past and Present
          </h1>{" "}
          <br />
          <Carousel imageArray={communityImages} />
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
                    src="images/museum.JPG"
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
                <Card.Img
                  variant="top"
                  src="images/youthcenter.jpeg"
                  alt="Fisherman's Museum"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "500px",
                  }}
                />
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
                <Card className="mb-2">
                  <Card.Img
                    variant="top"
                    src="images/oldie1.JPG"
                    alt="Fisherman's Museum"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "400px",
                    }}
                  />
                  <Card.Body>
                    <Card.Text>
                      <p>
                        Musgrave Harbour, NL, incorporated as a town in 1954,
                        population 1053 (2011c), 1085 (2006c). First
                        incorporated as the Rural District Council of Musgrave
                        Harbour and Doting Cove, the Town of Musgrave Harbour is
                        located on the northeastern coast of Newfoundland at the
                        mouth of Hamilton Sound, 100 km east of Gander. First
                        known as Muddy Hole, the name of the shallow cove on
                        which the community is situated, its name was changed in
                        1866 in honour of Sir Anthony Musgrave, the reigning
                        governor of Newfoundland. Musgrave Harbour was primarily
                        a fishing community with the in-shore fishery being the
                        mainstay due to the lack of a good harbour for use by
                        bigger boats.
                      </p>
                    </Card.Text>
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
                    src="images/school.jpg"
                    alt="Gill Memorial Academy"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "400px",
                    }}
                  />
                  <Card.Body>
                    <Card.Text>
                      <p>
                        The John B. Wheeler Public Library is located inside
                        Gill Memorial Academy in center of town. Use main
                        entrance and take the stairs to your right. Library is
                        located at the first door on your left at top of stairs.
                      </p>
                    </Card.Text>
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
        <h2>Business Directory</h2>
        {businessDirectoryData.map((business, index) => (
          <Cards
            key={index}
            imgSrc={business.imgSrc}
            imgAlt={business.imgAlt}
            title={business.title}
            text={business.text}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Community;

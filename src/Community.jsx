// import React from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Accordion,
//   ListGroup,
// } from "react-bootstrap";
// import "./community.css";

// const Community = () => {
//   return (
//     <Container>
//       <Row className="my-5">
//         <Col>
//           <h1 className="text-center">Welcome to Our Community</h1>
//         </Col>
//       </Row>

//       {/* Events and Happenings Section */}
//       <Row>
//         <Col md={6}>
//           <h2>Upcoming Events</h2>
//           <ListGroup>
//             <ListGroup.Item>Music Festival - June 12</ListGroup.Item>
//             <ListGroup.Item>Art Exhibition - July 19</ListGroup.Item>
//             {/* Add more events */}
//           </ListGroup>
//         </Col>

//         <Col md={6}>
//           <h2>Local News</h2>
//           {/* Example news item */}
//           <Card>
//             <Card.Body>
//               <Card.Title>Community Cleanup Success</Card.Title>
//               <Card.Text>
//                 Our annual community cleanup brought together over 100
//                 residents...
//               </Card.Text>
//             </Card.Body>
//           </Card>
//           {/* Add more news items */}
//         </Col>
//       </Row>

//       {/* Community Details Section */}
//       <Row className="my-4">
//         <Col md={12}>
//           <Accordion defaultActiveKey="0">
//             <Accordion.Item eventKey="0">
//               <Accordion.Header>Community History</Accordion.Header>
//               <Accordion.Body>
//                 <h4>
//                   Discover Musgrave Harbour, Newfoundland Labrador: A Historical
//                   and Touristic Overview
//                 </h4>{" "}
//                 <p>
//                   Musgrave Harbour, a town and designated place in the Canadian
//                   province of Newfoundland and Labrador, is a destination rich
//                   in history and natural beauty. This article will take you on a
//                   journey through its past, its present, and its attractions.
//                 </p>{" "}
//                 <h4>The History of Musgrave Harbour, Newfoundland Labrador</h4>{" "}
//                 <p>
//                   Musgrave Harbour, originally known as Muddy Hole, is a fishing
//                   community that has been visited by Europeans as early as the
//                   18th century. The town was renamed in 1886 in honor of
//                   Governor Anthony Musgrave. George Skeffington from Bonavista
//                   was granted salmon fishing rights there in 1723, marking the
//                   beginning of the town's long history with the fishing
//                   industry.
//                 </p>
//                 <p>
//                   In the 19th century, the migratory fishery between Musgrave
//                   Harbour and Cape Freels led to permanent settlement. The first
//                   family to settle was John Whiteway's in 1834. By 1900,
//                   Musgrave Harbour had become the administrative and religious
//                   center of Hamilton Sound. However, its poor harbour prevented
//                   it from becoming a commercial center.
//                 </p>{" "}
//                 <p>
//                   The introduction of the gasoline engine by Tobias Abbott of
//                   Doting Cove in 1909 marked a shift from the Labrador fishery
//                   to the inshore fishery. The town also became active in the
//                   Fisherman's Protective Union movement, establishing a local
//                   council in 1909. By 1911, the population had grown to 433 in
//                   Musgrave Harbour, 458 in Doting Cove, and 49 at Ragged
//                   Harbour.
//                 </p>{" "}
//                 <h4>
//                   The 1941 Airplane Crash in Musgrave Harbour, Newfoundland
//                   Labrador
//                 </h4>{" "}
//                 <p>
//                   In 1941, Musgrave Harbour was the site of a tragic plane crash
//                   that claimed the life of Dr. Sir Frederick Banting, the
//                   co-discoverer of insulin. The Hudson Bomber, en route to
//                   England, experienced engine trouble shortly after leaving
//                   Gander. The crew attempted to return to Gander but didn't make
//                   it. Captain Joseph Mackey was the only survivor.
//                 </p>{" "}
//                 <h4>
//                   The Geography of Musgrave Harbour, Newfoundland Labrador
//                 </h4>{" "}
//                 <p>
//                   Located within Division No. 8 in Newfoundland, Musgrave
//                   Harbour is situated on the Kittiwake Coast near the Town of
//                   Gander.
//                 </p>
//                 <h4>Demographics of Musgrave Harbour, Newfoundland Labrador</h4>
//                 <p>
//                   According to the 2021 Census of Population conducted by
//                   Statistics Canada, Musgrave Harbour had a population of 946
//                   living in 413 of its 486 total private dwellings. This
//                   represented a -4.4% change from its 2016 population of 990.
//                   With a land area of 67.3 km2 (26.0 sq mi), the town had a
//                   population density of 14.1/km2 (36.4/sq mi) in 2021.
//                 </p>{" "}
//                 <h4>Attractions in Musgrave Harbour, Newfoundland Labrador</h4>{" "}
//                 <p>
//                   Musgrave Harbour offers several attractions for visitors. The
//                   local park, named after Sir Frederick Banting, features an
//                   interpretation center dedicated to Dr. Banting and the 1941
//                   plane crash. The wreckage of the plane was airlifted to the
//                   park in 1990.
//                 </p>{" "}
//                 <p>
//                   St. Luke's United Church, located in the center of Musgrave
//                   Harbour, is a sightworthy church. The War Memorial in front of
//                   the post office is also worth a visit. Notably, the town is
//                   the birthplace of early architect William Tuff Whiteway.
//                 </p>
//               </Accordion.Body>
//             </Accordion.Item>
//             <Accordion.Item eventKey="1">
//               <Accordion.Header>Public Library</Accordion.Header>
//               <Accordion.Body>
//                 Our library offers a wide range of books...
//               </Accordion.Body>
//             </Accordion.Item>
//             {/* Add more sections as needed */}
//           </Accordion>
//         </Col>
//       </Row>

//       {/* Business Directory Section */}
//       <Row className="my-4">
//         <Col md={12}>
//           <h2>Business Directory</h2>
//           <Row>
//             {/* Example business listing */}
//             <Col md={4}>
//               <Card>
//                 <Card.Body>
//                   <Card.Title>Jane's Cafe</Card.Title>
//                   <Card.Text>A cozy spot for coffee and pastries.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             {/* Add more businesses */}
//           </Row>
//         </Col>
//       </Row>

//       {/* Additional sections for Recreation, etc. can be added here following the same pattern */}
//     </Container>
//   );
// };

// export default Community;

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

const Community = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">
            Welcome to The Town of Musgrave Harbour
          </h1>
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
                    className="fit-image"
                  />
                  <Card.Body>
                    <Card.Text>
                      A glimpse into the Fisherman's Museum exhibits.
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
              <Accordion.Body>Our town was founded in 1834...</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Gill Memorial Academy</Accordion.Header>
              <Accordion.Body>
                Our library offers a wide range of books...
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
                  alt="Jane's Cafe"
                />
                <Card.Body>
                  <Card.Title>D&M Services</Card.Title>
                  <Card.Text>Gas Station & Liquor Store</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more businesses with similar structure */}

            {/* Example for another business */}
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src="path-to-your-image/bookstore.jpg"
                  alt="Local Bookstore"
                />
                <Card.Body>
                  <Card.Title>Rocky Ridge Diner</Card.Title>
                  <Card.Text>Restaurant serving local favorites</Card.Text>
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

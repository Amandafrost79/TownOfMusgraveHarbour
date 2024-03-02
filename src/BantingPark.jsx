// import React from "react";
// import "./bantingpark.css";

// const BantingPark = () => {
//   return (
//     <div className="container mt-5">
//       <h1 className="mb-3">Banting Memorial Municipal Park</h1>
//       <p className="lead">
//         Welcome to Banting Memorial Municipal Park, a serene getaway in the
//         heart of our community.
//       </p>

//       <div className="row">
//         <div className="col-md-8">
//           <h2>About the Park</h2>
//           <p>
//             Banting Memorial Park is a beloved green space offering residents
//             and visitors alike a place to enjoy nature, participate in outdoor
//             activities, and attend community events. Whether you're looking for
//             a peaceful walk, a playground for the kids, or a place to have a
//             picnic, Banting Memorial Park has something for everyone.
//           </p>
//         </div>
//         <div className="col-md-4">
//           <h3>Visit Us</h3>
//           <p>
//             <strong>Address:</strong> 123 Park Street, Your City
//           </p>
//           <p>
//             <strong>Hours:</strong> 8AM - 8PM Daily
//           </p>
//         </div>
//       </div>

//       <div className="row mt-4">
//         <div className="col">
//           <h2>Gallery</h2>
//           {/* Implement a gallery component or include images directly */}
//           <div className="row">
//             <div className="col-md-4 mb-3">
//               <img
//                 src="TownOfMusgraveHarbour/images/park2.jpg"
//                 alt="Description"
//                 className="img-fluid"
//               />
//             </div>
//             <div className="col-md-4 mb-3">
//               <img
//                 src="TownOfMusgraveHarbour/images/park1.jpg"
//                 alt="Description"
//                 className="img-fluid"
//               />
//             </div>
//             <div className="col-md-4 mb-3">
//               <img
//                 src="TownOfMusgraveHarbour/images/park3.jpg"
//                 alt="Description"
//                 className="img-fluid"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add more sections as needed for park features, events, etc. */}
//     </div>
//   );
// };

// export default BantingPark;

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./bantingpark.css";

const BantingPark = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1>Welcome to Banting Park</h1>
          <p>
            This is a beautiful park located in the heart of our municipality,
            offering various attractions for visitors of all ages.
          </p>
        </Col>
      </Row>

      <Row>
        {/* Feature 1 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/images/park1.jpg" />
            <Card.Body>
              <Card.Title>Nature Trails</Card.Title>
              <Card.Text>
                Explore scenic trails and enjoy the beauty of nature.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Feature 2 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/images/park2.jpg" />
            <Card.Body>
              <Card.Title>Playgrounds</Card.Title>
              <Card.Text>
                Fun and safe playgrounds for children of all ages.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Feature 3 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/images/park4.jpg" />
            <Card.Body>
              <Card.Title>Community Events</Card.Title>
              <Card.Text>
                Join us for community gatherings, events, and more.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BantingPark;

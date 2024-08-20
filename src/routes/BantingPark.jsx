import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import "./bantingpark.css";
import Carousel from "../components/Carousel";

const imageArray = [
  { src: "TownOfMusgraveHarbour/images/park1.jpg", alt: "First slide" },
  { src: "TownOfMusgraveHarbour/images/park2.jpg", alt: "Second slide" },
  { src: "TownOfMusgraveHarbour/images/park3.jpg", alt: "Third slide" },
  { src: "TownOfMusgraveHarbour/images/park6.jpg", alt: "Fourth slide" },
];
const BantingPark = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-3">Banting Memorial Municipal Park</h1>

      <p className="para">
        Welcome to Banting Memorial Municipal Park, a serene getaway in the
        heart of our community.
      </p>

      <Carousel imageArray={imageArray} />

      <br />
      <div className="row">
        <div className="col-md-8">
          <h2>About the Park</h2>
          <p>
            The Banting Memorial Municipal Park is a popular camping destination
            in Central Newfoundland with its spectacular sandy beaches, warm
            atmosphere, and beautiful scenery is a must visit for anyone looking
            to relax, and explore the beauty that the shore has to offer.
          </p>
          <p>
            Located just 8 km south of Musgrave Harbour along the Kittiwake
            Coast, on route 330 is named after Sir Frederick Banting,
            co-discover of insulin, who died in a plane crash just outside of
            Musgrave Harbour in 1941.
          </p>
          <p>
            The park is a beautiful place for the whole family to enjoy, whether
            its relaxing in the sun, building castles in the sand, watching the
            incredible sunsets while you sit by a beach fire, taking a quiet
            walk around the ponds walking trail, enjoying a walk on our
            beautiful sandy beach, taking a swim in our fresh water pond, or the
            frigid Atlantic Ocean you will be sure to enjoy your stay.
          </p>
          <p>
            The park is serviced with 30 amp 2 way, water & electrical serviced
            sites, and for added comfort, we have shower and washroom
            facilities, as well as a coin operated laundromat service, a
            playground for the kids with two accessible swings, and a picnic
            area for day visitors.
          </p>
          <p>
            During your stay be sure to visit Banting Interpretation Center
            located in the park, as well as{" "}
            <a href="https://www.facebook.com/musgraveharbouramusements">
              Musgrave Harbour Amusements
            </a>{" "}
            which is an ideal spot where the family can enjoy mini golf, pedal
            boats, kayaks, paddle boards, a picnic area, and a variety of
            delicious concession foods from ice cream, sundae's, burgers, french
            fries, nacho's, poutine, nespresso and much much more.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Visit Us</h3>
          <p>
            <strong>Address:</strong> Route 330, 8 kms south of Musgrave Harbour
          </p>
          <p>
            <strong>Hours:</strong> 8AM - 8PM Daily
          </p>
        </div>
      </div>
      <section className="my-5">
        <h2 className="mb-3">Family Fun For All Ages!</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="TownOfMusgraveHarbour/images/park5.jpg"
                className="card-img-top"
                alt="Beach"
              />
              <div className="card-body">
                <h5 className="card-title">Beach Days</h5>
                <p className="card-text">
                  Enjoy a fun-filled day on our white sandy beach, while soaking
                  up the hot sun and cooling of in the cool waters of the North
                  Atlantic Ocean.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="TownOfMusgraveHarbour/images/parkplay.jpg"
                className="card-img-top"
                alt="Playground"
              />
              <div className="card-body">
                <h5 className="card-title">Playground</h5>
                <p className="card-text">
                  Let your day wind down while listening to the laughter and
                  schnagiens of the kids playing on the playground
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="TownOfMusgraveHarbour/images/park8.jpg"
                className="card-img-top"
                alt="Concession Stand"
              />
              <div className="card-body">
                <h5 className="card-title">Paint Days</h5>
                <p className="card-text">
                  Get out and enjoy a relaxing day of painting while visiting
                  our beautiful park. Giving you a keepsake to cherish forever.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="TownOfMusgraveHarbour/images/park7.jpg"
                className="card-img-top"
                alt="Concession Stand"
              />
              <div className="card-body">
                <h5 className="card-title">Canada Day Celebrations</h5>
                <p className="card-text">
                  Come celebrate with us this Canada Day and see how Banting
                  Park throws a celebration you won't soon forget!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="TownOfMusgraveHarbour/images/.jpg"
                className="card-img-top"
                alt="Concession Stand"
              />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                  Get out and enjoy a relaxing day of painting while visiting
                  our beautiful park. Giving you a keepsake to cherish forever.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="TownOfMusgraveHarbour/images/.jpg"
                className="card-img-top"
                alt="Concession Stand"
              />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                  Get out and enjoy a relaxing day of painting while visiting
                  our beautiful park. Giving you a keepsake to cherish forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="row mt-4">
        <div className="col">
          <h2>Gallery</h2>

          <div className="row">
            <div className="col-md-4 mb-3">
              <img
                src="TownOfMusgraveHarbour/images/park2.jpg"
                alt="Description"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="TownOfMusgraveHarbour/images/park1.jpg"
                alt="Description"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="TownOfMusgraveHarbour/images/park3.jpg"
                alt="Description"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="TownOfMusgraveHarbour/images/park3.jpg"
                alt="Description"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="TownOfMusgraveHarbour/images/park3.jpg"
                alt="Description"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div> */}
      <section className="my-5">
        <h2 className="mb-3">Banting Interpretation Centre & History</h2>
        <p>
          Built in 1991, The Banting Interpretation Centre displays a variety of
          interesting artifacts pertaining to Dr. Sir Frederick Bantings life
          and the tragic crash that claimed his life. On June 23, 2001 the
          monument and the replica of the Hudson Bomber was unveiled and placed
          along side the plane wreckage that was airlifted from Seven Mile Pond
          in 1990, close to the edge of the pond as it crashed in 1941. The
          Centre is open to visitors from July 1st until Labor Day weekend from
          11:00 am to 7:00 pm.
        </p>
        <p>
          In 1941 Dr. Sir Frederick Banting, co-discoverer of insulin, died in a
          plane crash near Musgrave Harbour, Newfoundland. The Hudson Bomber,
          with crew Captain Joseph Mackey, co-pilot William Snailham and
          navigator William Bird, were enroute to England when they had engine
          trouble just after take off from Gander. They attempted to return to
          Gander, but were unsuccessful, Captain Joseph Mackey was the sole
          survivor.
        </p>
        <p>
          The Banting Historical Trust Inc. was formed in 1997 to promote the
          development and heritage of The Banting Interpretation Centre, The
          Banting Memorial Municipal Park and other related work interests. The
          Musgrave Harbour Municipal Park was renamed in honor of Dr. Sir
          Frederick Banting. Located in the Park is The Banting Interpretation
          Centre where you will also find the actual Hudson Bomber wreckage and
          a replica of the bomber. The Centre is filled with an array of
          artifacts pertaining to the crash and also Dr. Sir Frederick Banting's
          work.
        </p>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="card">
              <img
                src="TownOfMusgraveHarbour/images/bantingInt.JPG"
                className="card-img-top img-fluid fit-img"
                alt="Banting Interpretation Centre"
              />
              <div className="card-body">
                <h5 className="card-title">Banting Interpretation Centre</h5>
                <p className="card-text">
                  Discover the legacy of Sir Frederick Banting, his
                  contributions to medicine, and his connection to our
                  community.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="card">
              <img
                src="TownOfMusgraveHarbour/images/plane.jpg"
                className="card-img-top img-fluid fit-img"
                alt="Rebuilt Model of Banting's Plane"
              />
              <div className="card-body">
                <h5 className="card-title">Historical Exhibit</h5>
                <p className="card-text">
                  Explore the exhibit featuring the rebuilt model of Sir
                  Frederick Banting's plane and learn about the fateful event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          backgroundImage: "url(TownOfMusgraveHarbour/images/beach.JPG)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Do not repeat the image
          height: "100%", // You can adjust this as needed
          minHeight: "400px",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <h1 className="display-4">Our Pristine White Sandy Beach</h1>
          <p className="lead">
            A breathtaking natural beauty, our beach is the crown jewel of the
            park, perfect for relaxation, sunbathing, and memorable moments.
          </p>
        </div>
      </div>
      <section className="my-5">
        <h2 className="mb-3">Musgrave Amusements</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="PathToYourImage/miniGolf.jpg"
                className="card-img-top"
                alt="Mini Golf"
              />
              <div className="card-body">
                <h5 className="card-title">Mini Golf</h5>
                <p className="card-text">
                  Enjoy a fun-filled round of mini-golf with family and friends
                  amidst picturesque surroundings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="PathToYourImage/paddleBoats.jpg"
                className="card-img-top"
                alt="Paddle Boats"
              />
              <div className="card-body">
                <h5 className="card-title">Paddle Boat Rentals</h5>
                <p className="card-text">
                  Explore the water in a leisurely manner with our paddle boats,
                  perfect for a relaxing day out.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="PathToYourImage/concessionStand.jpg"
                className="card-img-top"
                alt="Concession Stand"
              />
              <div className="card-body">
                <h5 className="card-title">Concession Stand</h5>
                <p className="card-text">
                  Treat yourself to delicious snacks and refreshing beverages at
                  our concession stand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          backgroundImage: "url(TownOfMusgraveHarbour/images/careypond.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Do not repeat the image
          height: "100%", // You can adjust this as needed
          minHeight: "400px",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <h1 className="display-4">Banting Walking Trail</h1>
          <p className="lead">
            Explore Nature's Splendor, Step by Step on the Banting Walking
            Trail.
          </p>
        </div>
      </div>
      {/* Add more sections as needed for park features, events, etc. */}
    </div>
  );
};

export default BantingPark;

// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import "./bantingpark.css";

// const BantingPark = () => {
//   return (
//     <Container className="my-5">
//       <Row className="mb-4">
//         <Col>
//           <h1>Welcome to Banting Park</h1>
//           <p>
//             This is a beautiful park located in the heart of our municipality,
//             offering various attractions for visitors of all ages.
//           </p>
//         </Col>
//       </Row>

//       <Row>
//         {/* Feature 1 */}
//         <Col md={4} className="mb-4">
//           <Card>
//             <Card.Img
//               variant="top"
//               src="/TownOfMusgraveHarbour/images/park1.jpg"
//             />
//             <Card.Body>
//               <Card.Title>Nature Trails</Card.Title>
//               <Card.Text>
//                 Explore scenic trails and enjoy the beauty of nature.
//               </Card.Text>
//               <Button variant="primary">Learn More</Button>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Feature 2 */}
//         <Col md={4} className="mb-4">
//           <Card>
//             <Card.Img
//               variant="top"
//               src="/TownOfMusgraveHarbour/images/park2.jpg"
//             />
//             <Card.Body>
//               <Card.Title>Playgrounds</Card.Title>
//               <Card.Text>
//                 Fun and safe playgrounds for children of all ages.
//               </Card.Text>
//               <Button variant="primary">Learn More</Button>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Feature 3 */}
//         <Col md={4} className="mb-4">
//           <Card>
//             <Card.Img
//               variant="top"
//               src="/TownOfMusgraveHarbour/images/park4.jpg"
//             />
//             <Card.Body>
//               <Card.Title>Community Events</Card.Title>
//               <Card.Text>
//                 Join us for community gatherings, events, and more.
//               </Card.Text>
//               <Button variant="primary">Learn More</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default BantingPark;

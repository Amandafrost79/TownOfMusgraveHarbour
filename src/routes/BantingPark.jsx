import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";

const imageArray = [
  { src: "images/park1.jpg", alt: "First slide" },
  { src: "images/park2.jpg", alt: "Second slide" },
  { src: "images/park3.jpg", alt: "Third slide" },
  { src: "images/park6.jpg", alt: "Fourth slide" },
];

const BantingPark = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-3 text-center">Banting Memorial Municipal Park</h1>

      <p className="text-center">
        Welcome to Banting Memorial Municipal Park, a serene getaway in the
        heart of our community.
      </p>

      {/* Carousel */}
      <Carousel imageArray={imageArray} />

      {/* About the Park */}
      <Row className="mt-5">
        <Col md={8}>
          <h2>About the Park</h2>
          <p>
            The Banting Memorial Municipal Park is a popular camping destination
            in Central Newfoundland with its spectacular sandy beaches, warm
            atmosphere, and beautiful scenery. It is a must-visit for anyone
            looking to relax and explore the beauty of the shore.
          </p>
          <p>
            Located just 8 km south of Musgrave Harbour along the Kittiwake
            Coast on route 330, it is named after Sir Frederick Banting,
            co-discoverer of insulin, who died in a plane crash just outside of
            Musgrave Harbour in 1941.
          </p>
          <p>
            The park is a beautiful place for the whole family to enjoy, whether
            it's relaxing in the sun, building castles in the sand, watching the
            incredible sunsets, or taking a quiet walk around the ponds.
          </p>
          <p>
            The park offers 30-amp two-way serviced sites with water and
            electricity, shower and washroom facilities, a coin-operated
            laundromat, a playground with accessible swings, and a picnic area
            for day visitors.
          </p>
          <p>
            Be sure to visit the Banting Interpretation Center, and enjoy{" "}
            <a
              href="https://www.facebook.com/musgraveharbouramusements"
              target="_blank"
              rel="noopener noreferrer"
            >
              Musgrave Harbour Amusements
            </a>{" "}
            for mini golf, pedal boats, kayaks, paddleboards, and more.
          </p>
        </Col>
        <Col md={4}>
          <h3>Visit Us</h3>
          <p>
            <strong>Address:</strong> Route 330, 8 km south of Musgrave Harbour
          </p>
          <p>
            <strong>Hours:</strong> 8AM - 8PM Daily
          </p>
        </Col>
      </Row>

      {/* Family Fun Section */}
      <section className="my-5">
        <h2 className="mb-3 text-center">Family Fun For All Ages!</h2>
        <Row>
          <Cards
            imgSrc="images/park5.jpg"
            imgAlt="Beach"
            title="Beach Days"
            text="Enjoy a fun-filled day on our white sandy beach, soaking up the hot sun and cooling off in the cool waters of the North Atlantic Ocean."
          />
          <Cards
            imgSrc="images/parkplay.jpg"
            imgAlt="Playground"
            title="Playground"
            text="Listen to the laughter and shenanigans of the kids playing on the playground."
          />
          <Cards
            imgSrc="images/park8.jpg"
            imgAlt="Painting"
            title="Paint Days"
            text="Get out and enjoy a relaxing day of painting, creating a keepsake to cherish forever."
          />
          <Cards
            imgSrc="images/park7.jpg"
            imgAlt="Canada Day"
            title="Canada Day Celebrations"
            text="Come celebrate with us on Canada Day and experience a celebration you won't soon forget!"
          />
        </Row>
      </section>

      {/* Banting Interpretation Centre & History */}
      <section className="my-5">
        <h2 className="mb-3 text-center">
          Banting Interpretation Centre & History
        </h2>
        <p>
          Built in 1991, The Banting Interpretation Centre displays artifacts
          related to Dr. Sir Frederick Banting's life and the tragic crash that
          claimed his life. The Centre is open to visitors from July 1st until
          Labor Day weekend from 11:00 am to 7:00 pm.
        </p>
        <p>
          Dr. Sir Frederick Banting, co-discoverer of insulin, died in a plane
          crash near Musgrave Harbour in 1941. The Hudson Bomber crashed, with
          only Captain Joseph Mackey surviving. The Centre is filled with
          artifacts about the crash and Banting's work.
        </p>

        <Row>
          <Cards
            imgSrc="images/bantingInt.JPG"
            imgAlt="Banting Interpretation Centre"
            title="Banting Interpretation Centre"
            text="Discover the legacy of Sir Frederick Banting, his contributions to medicine, and his connection to our community."
            columnClass={6}
            marginBottom="mb-3"
            isLarge={true}
          />
          <Cards
            imgSrc="images/plane.jpg"
            imgAlt="Rebuilt Model of Banting's Plane"
            title="Historical Exhibit"
            text="Explore the rebuilt model of Sir Frederick Banting's plane and learn about the fateful event."
            columnClass={6}
            marginBottom="mb-3"
            isLarge={true}
          />
        </Row>
      </section>

      {/* Jumbotron Section 1 */}
      <div
        className="jumbotron jumbotron-fluid bg-cover text-white"
        style={{
          backgroundImage: "url(images/beach.JPG)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
        }}
      >
        <Container>
          <h1 className="display-4">Our Pristine White Sandy Beach</h1>
          <p className="lead">
            A breathtaking natural beauty, our beach is the crown jewel of the
            park, perfect for relaxation, sunbathing, and memorable moments.
          </p>
        </Container>
      </div>

      {/* Musgrave Amusements Section */}
      <section className="my-5">
        <h2 className="mb-3 text-center">Musgrave Amusements</h2>
        <Row>
          <Cards
            imgSrc="images/minigolf.jpg"
            imgAlt="Mini Golf"
            title="Mini Golf"
            text="Enjoy a fun-filled round of mini-golf with family and friends amidst picturesque surroundings."
          />
          <Cards
            imgSrc="images/paddleboats.jpg"
            imgAlt="Paddle Boats"
            title="Paddle Boat Rentals"
            text="Explore the water with our paddle boats, perfect for a relaxing day out."
          />
          <Cards
            imgSrc="images/concession.jpg"
            imgAlt="Concession Stand"
            title="Concession Stand"
            text="Treat yourself to delicious snacks and refreshing beverages at our concession stand."
          />
        </Row>
      </section>

      {/* Jumbotron Section 2 */}
      <div
        className="jumbotron jumbotron-fluid bg-cover text-white"
        style={{
          backgroundImage: "url(images/careypond.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
        }}
      >
        <Container>
          <h1 className="display-4">Banting Walking Trail</h1>
          <p className="lead">
            Explore Nature's Splendor, Step by Step on the Banting Walking
            Trail.
          </p>
        </Container>
      </div>
    </Container>
  );
};

export default BantingPark;

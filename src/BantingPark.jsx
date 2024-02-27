import React from "react";
import "./bantingpark.css";

const BantingPark = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-3">Banting Memorial Municipal Park</h1>
      <p className="lead">
        Welcome to Banting Memorial Municipal Park, a serene getaway in the
        heart of our community.
      </p>

      <div className="row">
        <div className="col-md-8">
          <h2>About the Park</h2>
          <p>
            Banting Memorial Park is a beloved green space offering residents
            and visitors alike a place to enjoy nature, participate in outdoor
            activities, and attend community events. Whether you're looking for
            a peaceful walk, a playground for the kids, or a place to have a
            picnic, Banting Memorial Park has something for everyone.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Visit Us</h3>
          <p>
            <strong>Address:</strong> 123 Park Street, Your City
          </p>
          <p>
            <strong>Hours:</strong> 8AM - 8PM Daily
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2>Gallery</h2>
          {/* Implement a gallery component or include images directly */}
          <div className="row">
            <div className="col-md-4 mb-3">
              <img
                src="TownOfMusgraveHarbour/images/IMG_8795.JPG"
                alt="Description"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="TownOfMusgraveHarbour/images/IMG_2624.JPG"
                alt="Description"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="TownOfMusgraveHarbour/images/Photo_6553989_DJI_389_jpg_5469436_0_202171419514_photo_original 2.JPG"
                alt="Description"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add more sections as needed for park features, events, etc. */}
    </div>
  );
};

export default BantingPark;

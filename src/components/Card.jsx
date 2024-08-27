import React from "react";

const Card = ({ imgSrc, imgAlt, title, text }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={imgAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

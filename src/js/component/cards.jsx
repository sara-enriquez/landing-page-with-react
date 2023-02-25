import React from "react";
import Card from "./card.jsx";

const Cards = () => {
  return (
      <div className="row mt-3">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Card />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Card />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Card />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Card />
        </div>
      </div>
    
  );
};

export default Cards;

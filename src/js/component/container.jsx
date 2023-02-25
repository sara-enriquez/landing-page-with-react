import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";

//create your first component
const Container = () => {
  return (
    <div className="container">
      <Jumbotron />
      <Cards />
    </div>
  );
};

export default Container;

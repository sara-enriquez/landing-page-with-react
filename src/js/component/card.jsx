import React from "react";

const Card = () => {
  return (
    <div className="card text-center" style={{ width: "15rem" }}>
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-solid-color-simple-background-image_557028.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const Jumbotron = () => {
  return (
    <div class="mb-4 bg-light rounded-3">
      <div class="container pt-3">
        <h1 class="display-5 fw-bold">A Warm Welcome!</h1>
        <p class="col-md fs-4">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button class="btn btn-primary btn-lg" type="button">
          Call to Action!
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;

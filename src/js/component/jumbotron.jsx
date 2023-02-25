import React from "react";

const Jumbotron = () => {
  return (
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container py-5">
        <h1 class="display-5 fw-bold">A Warm Welcome!</h1>
        <p class="col-md fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button class="btn btn-primary btn-lg" type="button">
          Call to Action!
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;

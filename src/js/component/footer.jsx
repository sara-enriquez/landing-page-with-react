import React from "react";

//create your first component
const Footer = () => {
  return (
    <div>
      <section
        style={{
          display: "flex",
          backgroundColor: "black",
          color: "white",
          fontSize: "12px",
          height: "40px",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        Copy Rigth
        <span>
          <i className="fa-regular fa-copyright"></i>
        </span>
        Your website2023
      </section>
    </div>
  );
};

export default Footer;

import React from "react";
import "../../../index.css";

function Footer() {
  return (
    <div className="footer">
      <div className="d-flex justify-content-center">
        <div className="p-2 bd-highlight">
          <a href="/">
            <i className="fab fa-facebook-f social"></i>
          </a>
        </div>
        <div className="p-2 bd-highlight">
          <a href="/">
            <i className="fab fa-twitter social"></i>
          </a>
        </div>
        <div className="p-2 bd-highlight">
          <a href="/">
            <i className="fab fa-google-plus-g social"></i>
          </a>
        </div>
        <div className="p-2 bd-highlight">
          {" "}
          <a href="/">
            <i className="fab fa-instagram social" />
          </a>
        </div>
        <div className="p-2 bd-highlight">
          <a href="/">
            <i className="fab fa-linkedin social" />
          </a>
        </div>
        <div className="p-2 bd-highlight">
          <a href="/">
            <i className="fab fa-youtube social" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

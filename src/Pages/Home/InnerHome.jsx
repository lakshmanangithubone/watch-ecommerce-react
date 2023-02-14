import React from "react";

import homepic from "../../img/home.png";

const InnerHome = () => {
  return (
    <div className="home">
      <div className="social-icons">
        <i className="fa-brands fa-facebook hidden"></i>
        <i className="fa-brands fa-instagram hidden"></i>
        <i className="fa-brands fa-youtube hidden"></i>
        <i className="fa-brands fa-twitter hidden"></i>
      </div>
      <div className="home-text">
        <h2>
          Latest Watch <br />
          Models
        </h2>
        <p>
          Latest arrival of the new imported watches of the B720 series, with a
          modern and resistant design.
        </p>

        <button className="btn">Discover</button>
      </div>
      <div className="image">
        <img src={homepic} alt="home-img" />
      </div>
    </div>
  );
};

export default InnerHome;

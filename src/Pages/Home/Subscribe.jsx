import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="inner-subscribe">
        <div className="left">
          <h2>
            Subscribe Our <br />
            Newsletter
          </h2>
          <p>
            Subscribe to our email newsletter to get the best offers, discounts,
            coupons, gifts and much more.
          </p>
        </div>
        <div className="right">
          <input type="text" placeholder="Enter Your Email" />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

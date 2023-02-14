import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-up">
        <div className="information hidden">
          <h2>our information</h2>
          <p>mumbai-83</p>
          <p>park main street</p>
          <p>123-456-789</p>
        </div>
        <div className="about-div hidden">
          <h2>About Us</h2>
          <a href="">Support center</a>
          <a href="">Customer Support</a>
          <a href="">Copy Right</a>
        </div>
        <div className="product-footer hidden">
          <h2>Product</h2>
          <a href="">Electronic Gadgets</a>
          <a href="">Analog watches</a>
          <a href="">Clocks</a>
          <a href="">Accesories</a>
        </div>
        <div className="social hidden">
          <h2>Social</h2>
          <div className="icons-div">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <p className="hidden left-side">© 2021 Rolex. All rigths reserved.</p>
        <div className="terms hidden right-side">
          <a href="">Terms & Agreements</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

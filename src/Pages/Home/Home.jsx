import React from "react";

import InnerHome from "./InnerHome";
import OurStory from "./OurStory";
import Testimonials from "./Testimonials";
import ProductsSection from "./ProductsSection";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-main active-page">
      <InnerHome />
      <OurStory />
      <Testimonials />
      <ProductsSection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;

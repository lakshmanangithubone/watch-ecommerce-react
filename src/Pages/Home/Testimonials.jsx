import React, { useState } from "react";

import testimonial from "../../img/testimonial.png";
import testimonial1 from "../../img/testimonial1.jpg";
import testimonial2 from "../../img/testimonial2.jpg";
import testimonial3 from "../../img/testimonial3.jpg";

import people from "../../Reviews";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="testimonials">
      <div className="testimonial-swiper">
        <div className="testimonial-card">
          <div className="testimonial-quote">
            <i className="bx bxs-quote-alt-left"></i>
          </div>
          <p className="testimonial-description">{text}</p>
          <h3 className="testimonial-date">March 27. 2021</h3>

          <div className="testimonial-perfil">
            <img src={image} alt={name} className="testimonial-perfil-img" />

            <div className="testimonial-perfil-data">
              <span className="testimonial-perfil-name">{name}</span>
              <span className="testimonial-perfil-detail">{job} </span>
            </div>
          </div>
        </div>
        <div className="testimonials-btns">
          <div className="swiper-button-prev" onClick={prevPerson}>
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <div className="swiper-button-next" onClick={nextPerson}>
            <i className="bx bx-right-arrow-alt"></i>
          </div>
        </div>
      </div>

      <div className="testimonial-img-div">
        <img src={testimonial} alt="testimonial-img" />
      </div>
    </div>
  );
};

export default Testimonials;

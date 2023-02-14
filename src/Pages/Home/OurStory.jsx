import React from "react";

import aboutpic from "../../img/story.png";

const OurStory = () => {
  return (
    <div className="our-story">
      <h2>OUR STORY</h2>
      <div className="div">
        <div className="our-story-img">
          <img src={aboutpic} alt="storyimg" />
        </div>
        <div className="our-story-text">
          <h2>Inspirational Watch of this year</h2>

          <p>
            The latest and modern watches of this year, is available in various
            presentations in this store, discover them now.
          </p>

          <button className="btn">Discover</button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;

import React from "react";
import { Link } from "react-router-dom";

import bannerImg from "../../assets/header.png";

const Banner = () => {
  return (
    <div className="selection__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">UP TO 20% Discount on</h4>
        <h1>Girl's Fashion</h1>
        <p>
          Fashion for women is not just about following trends; it's a form of
          self-expression that reflects individuality and creativity. The way a
          woman dresses can speak volumes about her personality, mood, and even
          her aspirations.
        </p>
        <button className="btn">
          <Link to="/shop">EXPLORE NOW</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;

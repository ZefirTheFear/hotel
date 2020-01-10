import React from "react";

import "./Hero.scss";

const Hero = ({ children, className, imgUrl }) => {
  return (
    <header style={{ backgroundImage: `url(${imgUrl})` }} className={className}>
      {children}
    </header>
  );
};

export default Hero;

import React from "react";

import "./Hero.scss";

const Hero = ({ children, className }) => {
  return <header className={className}>{children}</header>;
};

export default Hero;

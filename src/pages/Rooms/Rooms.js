import React from "react";

import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";

const Rooms = () => {
  return (
    <Hero className="roomsHero">
      <Banner title="our rooms">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;

import React from "react";

import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import ImgUrl from "../../images/room-2.jpeg";
import RoomsContainer from "../../components/RoomsContainer/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero className="roomsHero" imgUrl={ImgUrl}>
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;

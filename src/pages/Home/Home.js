import React from "react";

import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";
import ImgUrl from "../../images/defaultBcg.jpeg";

const Home = () => {
  return (
    <>
      <Hero className="homeHero" imgUrl={ImgUrl}>
        <Banner title="luxurious rooms" subtitle="rooms starting at 100$">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;

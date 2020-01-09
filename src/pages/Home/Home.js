import React from "react";

import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Hero className="homeHero">
        <Banner title="luxurious rooms" subtitle="rooms starting at 100$">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default Home;

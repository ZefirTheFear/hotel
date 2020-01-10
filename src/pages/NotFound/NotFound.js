import React from "react";

import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import ImgUrl from "../../images/defaultBcg.jpeg";

const NotFound = () => {
  return (
    <Hero className="notFoundHero" imgUrl={ImgUrl}>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default NotFound;

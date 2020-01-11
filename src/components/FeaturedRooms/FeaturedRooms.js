import React from "react";

import Title from "../Title/Title";
import Room from "../Room/Room";

import rooms from "../../data";

import "./FeaturedRooms.scss";

const FeaturedRooms = () => {
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms__center">
        {rooms
          .filter(room => room.featured)
          .map(room => (
            <Room key={room.id} room={room} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedRooms;

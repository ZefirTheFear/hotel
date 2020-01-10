import React, { useContext } from "react";

import Title from "../Title/Title";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import { RoomContext } from "../../context";

import "./FeaturedRooms.scss";

const FeaturedRooms = () => {
  const roomContext = useContext(RoomContext);

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms__center">
        {roomContext.loading ? (
          <Loading />
        ) : (
          roomContext.featuredRooms.map(room => <Room key={room.id} room={room} />)
        )}
      </div>
    </section>
  );
};

export default FeaturedRooms;

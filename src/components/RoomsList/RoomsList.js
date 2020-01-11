import React from "react";

import Room from "../Room/Room";

import "./RoomsList.scss";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="roomslist__empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist__center">
        {rooms.map(room => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;

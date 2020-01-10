import React from "react";
import { Link } from "react-router-dom";

import "./Room.scss";

const Room = ({ room }) => {
  return (
    <article className="room">
      <div className="room__img-container">
        <img src={room.images[0]} alt="room" />
        <div className="room__price-top">
          <h6>${room.price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${room.urlName}`} className="btn-primary room__link">
          features
        </Link>
        <p className="room__info">{room.name}</p>
      </div>
    </article>
  );
};

export default Room;

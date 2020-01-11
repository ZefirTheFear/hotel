import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";

import rooms from "../../data";
import "./SingleRoom.scss";

const SingleRoom = props => {
  const room = rooms.find(room => room.urlName === props.match.params.room);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  return (
    <>
      <Hero className="singleRoomHero" imgUrl={room.images[0]}>
        <Banner title={`${room.name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </Hero>
      <section className="single-room">
        <div className="single-room__images">
          {room.images.map((image, index) =>
            index !== 0 ? <img key={image} src={image} alt={room.name} /> : null
          )}
        </div>
        <div className="single-room__desc">
          <article className="single-room__details">
            <h3>details</h3>
            <p>{room.description}</p>
          </article>
          <article className="single-room__info">
            <h3>info</h3>
            <h6>price : ${room.price}</h6>
            <h6>size : {room.size} SQFT</h6>
            <h6>
              max capacity :
              {room.capacity > 1 ? `${room.capacity} people` : `${room.capacity} person`}
            </h6>
            <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{room.breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="single-room__extras">
        <h6>extras </h6>
        <ul>
          {room.extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;

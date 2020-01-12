import React, { useContext, useEffect, useRef } from "react";

import Title from "../Title/Title";
import { RoomContext } from "../../context";

import rooms from "../../data";
import "./RoomsFilter.scss";

const RoomsFilter = () => {
  const roomContext = useContext(RoomContext);

  const compDidMount = useRef(false);
  const formChanged = useRef();

  useEffect(() => {
    if (compDidMount.current) {
      fitlerRooms();
    }
    compDidMount.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formChanged.current]);

  const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1);
    console.log(name, value);

    const fn = `roomContext.set${name}(value)`;
    // eslint-disable-next-line no-eval
    eval(fn);
    formChanged.current = Date.now();
  };

  const fitlerRooms = () => {
    let tempRooms = [...rooms];
    // filter by type
    if (roomContext.type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === roomContext.type);
    }
    // filter by capacity
    if (roomContext.capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= roomContext.capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= roomContext.price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= roomContext.minSize && room.size <= roomContext.maxSize
    );
    //filter by breakfast
    if (roomContext.breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (roomContext.pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    roomContext.setSortedRooms(tempRooms);
  };

  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  let people = getUnique(rooms, "capacity");

  return (
    <section className="roomsfilter">
      <Title title="search rooms" />
      <form className="roomsfilter__form">
        {/* select type */}
        <div className="roomsfilter__form-group">
          <label>room type</label>
          <select
            name="type"
            onChange={handleChange}
            className="roomsfilter__form-control"
            value={roomContext.type}
          >
            {types.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="roomsfilter__form-group">
          <label>max guests</label>
          <select
            name="capacity"
            onChange={handleChange}
            className="roomsfilter__form-control"
            value={roomContext.capacity}
          >
            {people.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="roomsfilter__form-group">
          <label>room price 0-{roomContext.price}$</label>
          <input
            type="range"
            name="price"
            min="0"
            max={roomContext.maxPrice}
            value={roomContext.price}
            onChange={handleChange}
            className="roomsfilter__form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="roomsfilter__form-group">
          <label>room size </label>
          <div className="roomsfilter__size-inputs">
            <input
              type="number"
              name="minSize"
              value={roomContext.minSize}
              onChange={handleChange}
              className="roomsfilter__size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={roomContext.maxSize}
              onChange={handleChange}
              className="roomsfilter__size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="roomsfilter__form-group">
          <div className="roomsfilter__single-extra">
            <input
              type="checkbox"
              name="breakfast"
              checked={roomContext.breakfast}
              onChange={handleChange}
            />
            <label>breakfast</label>
          </div>
          <div className="roomsfilter__single-extra">
            <input type="checkbox" name="pets" checked={roomContext.pets} onChange={handleChange} />
            <label>pets</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default RoomsFilter;

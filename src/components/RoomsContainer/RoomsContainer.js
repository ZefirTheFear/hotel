import React, { useContext } from "react";

import RoomsFilter from "../RoomsFilter/RoomsFilter";
import RoomsList from "../RoomsList/RoomsList";
import { RoomContext } from "../../context";

const RoomsContainer = () => {
  const roomContext = useContext(RoomContext);
  console.log(roomContext);

  return (
    <>
      <RoomsFilter rooms={roomContext.rooms} />
      <RoomsList rooms={roomContext.sortedRooms} />
    </>
  );
};

export default RoomsContainer;

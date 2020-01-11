import React, { useContext } from "react";

import RoomsFilter from "../RoomsFilter/RoomsFilter";
import RoomsList from "../RoomsList/RoomsList";
import { RoomContext } from "../../context";

const RoomsContainer = () => {
  const roomContext = useContext(RoomContext);

  return (
    <>
      <RoomsFilter />
      <RoomsList rooms={roomContext.sortedRooms} />
    </>
  );
};

export default RoomsContainer;

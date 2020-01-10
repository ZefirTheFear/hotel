import React, { useState, useEffect } from "react";

import data from "./data";

export const RoomContext = React.createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let featuredRooms = data.filter(room => room.featured);
    setRooms(data);
    setSortedRooms(data);
    setFeaturedRooms(featuredRooms);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RoomContext.Provider value={{ rooms, sortedRooms, featuredRooms, loading }}>
      {children}
    </RoomContext.Provider>
  );
};

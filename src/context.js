import React, { useState } from "react";

import data from "./data";

export const RoomContext = React.createContext();

export const RoomProvider = ({ children }) => {
  const [sortedRooms, setSortedRooms] = useState([...data]);

  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(Math.max(...data.map(item => item.price)));
  const [maxPrice, setMaxPrice] = useState(Math.max(...data.map(item => item.price)));
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(Math.max(...data.map(item => item.size)));
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  return (
    <RoomContext.Provider
      value={{
        sortedRooms,
        setSortedRooms,
        type,
        setType,
        capacity,
        setCapacity,
        price,
        setPrice,
        maxPrice,
        setMaxPrice,
        minSize,
        setMinSize,
        maxSize,
        setMaxSize,
        breakfast,
        setBreakfast,
        pets,
        setPets
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

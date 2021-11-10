import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [priceRoom, setPriceRoom] = useState('');

  const states = { checkIn, checkOut, priceRoom };
  const setters = { setCheckIn, setCheckOut, setPriceRoom };

  return (
    <GlobalContext.Provider value={{states, setters}}>
      {props.children}
    </GlobalContext.Provider>
  );
};


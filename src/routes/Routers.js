// import Accommodation from '../pages/Accommodation';
// import Acquisition from '../pages/Acquisition';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Concluded } from "../pages/Concluded";
import { Payment } from "../pages/Payment";
import { Booking } from "../pages/Booking";

export function Routers() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Booking />}></Route>
        <Route path="/payment:id" element={<Payment />}>
        </Route>
        <Route exact path="/concluded" element={<Concluded />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

// import Accommodation from '../pages/Accommodation';
// import Acquisition from '../pages/Acquisition';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Concluded } from "../pages/Concluded";
import { Booking } from "../pages/Booking";
import { Payment } from "../pages/Payment";

export function Routers() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Booking />} />
        <Route exact path="/payment/:nameRoom/:price/:dateIn/:dateOut" element={<Payment />} />
        <Route exact path="/concluded" element={<Concluded />} />
      </Routes>
    </BrowserRouter>
  );
}

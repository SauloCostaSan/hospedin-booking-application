import React, { Component } from "react";
import { HotelDetails } from "../components/Home/HotelDetails";
import { RoomCards } from "../components/Rooms/RoomCards";

import { PageReserve } from "./styled";


export class Booking extends Component {
  render() {
    return (
      <>
        <PageReserve>
          <HotelDetails />
          <RoomCards />
        </PageReserve>
      </>
    );
  }
}

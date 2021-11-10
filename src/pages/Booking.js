import React, { Component } from "react";
import { PageReserve } from "./styled";

import { HotelDetails } from "../components/Home/HotelDetails";

export class Booking extends Component {
  render() {
    return (
      <>
        <PageReserve>
          <HotelDetails />
        </PageReserve>
      </>
    );
  }
}

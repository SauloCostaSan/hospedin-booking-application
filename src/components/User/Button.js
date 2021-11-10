import React, { Component } from "react";
import { Btn } from "./styled";

export const Button = () => {
  return (
    <>
      <Btn to={`/payment`}>Reservar</Btn>
      {/* <Btn to={`/payment?price=${this.props.price}?beginDate?endDate`}>Reservar</Btn> */}
      {/* <Btn to={`/payment:item`}>Reservar</Btn> */}
      {/* <Btn to={`/payment:name`}>Reservar</Btn> */}
    </>
  );
};

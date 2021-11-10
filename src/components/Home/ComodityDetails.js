import React, { Component } from "react";


import * as St from "./styled";

import coffee from "../../../images/svg/coffee-icon.svg";
import pool from "../../../images/svg/pool-icon.svg";
import towel from "../../../images/svg/towel-icon.svg";
import watch from "../../../images/svg/watch-icon.svg";
import wifi from "../../../images/svg/wifi-icon.svg";

export class CommodityDetails extends Component {
  render() {
    return (
      <>
        <St.ComfortList>
          <St.Comfort>
            <St.IconComfort src={wifi} />
            <St.TextComfort>Wi-Fi gratuíto</St.TextComfort>
          </St.Comfort>
          <St.Comfort>
            <St.IconComfort src={coffee} />
            <St.TextComfort>Restaurante</St.TextComfort>
          </St.Comfort>
          <St.Comfort>
            <St.IconComfort src={watch} />
            <St.TextComfort>Recepção 24h</St.TextComfort>
          </St.Comfort>
          <St.Comfort>
            <St.IconComfort src={towel} />
            <St.TextComfort>Toalha de banho</St.TextComfort>
          </St.Comfort>
          <St.Comfort>
            <St.IconComfort src={pool} />
            <St.TextComfort>Piscina</St.TextComfort>
          </St.Comfort>
        </St.ComfortList>
      </>
    );
  }
}

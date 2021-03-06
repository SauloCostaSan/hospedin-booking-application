import React, { Component } from "react";

import * as Gl from "../../generalStyled/variables";
import * as St from "./styled";

import check from "../../assets/images/svg/fe-check-circle.svg";

export class Amenities extends Component {

  render() {
    console.log(this.props.data);
    if (this.props.data.length) {
      return this.props.data.map((amenty, i) => {
        return (
          <St.Commodity key={[i]}>
            <St.AmenitiesList>
            <St.CommodityIcon src={check} />
            <Gl.Text>{amenty}</Gl.Text>
            </St.AmenitiesList>
          </St.Commodity>
        );
      });
    }
    return <St.Commodity></St.Commodity>;
  }
}

import React, { Component} from "react";
import * as St from "./styled";


export class InitialCards extends Component {
  render() {
    return (
      <St.InitialSection>
          <St.Initial>
            <St.SelectDates>
              Por favor, selecione as datas de Check in e Check out
            </St.SelectDates>
          </St.Initial>
      </St.InitialSection>
    );
  }
}

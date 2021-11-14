import React, { Component } from "react";

import * as St from "./styled";

import illustration from "../assets/images/illustration.png";

export class Concluded extends Component {
  render() {
    return (
      <>
        <St.Sucess>
          <St.Illustration src={illustration} />
          <St.TitleSucess>Sua reserva foi feita com sucesso!</St.TitleSucess>
          <St.TextSucess>
            Você receberá um e-mail com a confirmação e mais detalhes sobre sua
            reserva. Estamos ansiosos para recebê-lo!
          </St.TextSucess>
        </St.Sucess>
      </>
    );
  }
}

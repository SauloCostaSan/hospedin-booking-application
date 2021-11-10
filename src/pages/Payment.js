import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { H2 } from "../generalStyled/variables";
import { Btn } from "../components/User/styled";
import * as St from "./styled";

import card from "../assets/images/svg/card-icon.svg";

export class Payment extends Component {
  render() {
    return (
      <>
        <St.SectionPayment>
          <St.Data>
            <St.PersonalData>
              <St.TitlePersonal>Dados pessoais</St.TitlePersonal>
              <St.FormPersonal>
                <St.FormPersonalText>
                  Nome completo<b>*</b>
                </St.FormPersonalText>
                <St.Input type="text" />
              </St.FormPersonal>
              <St.FormPersonal>
                <St.FormPersonalText>
                  E-mail<b>*</b>
                </St.FormPersonalText>
                <St.Input type="email" />
              </St.FormPersonal>
            </St.PersonalData>
            <St.CardData>
              <H2>Dados do cartão</H2>
              <St.TextCard>
                Você não será cobrado agora. Solicitamos os dados do cartão para
                garantir a reserva e realizar a cobrança em caso de cancelamento
                7 dias antes da reserva.
              </St.TextCard>
              <St.CardNumber>
                <St.FormCardText>Número do cartão *</St.FormCardText>
                <St.InputNumber>
                  <St.IconCard src={card} />
                  <St.InputCard type="text" />
                </St.InputNumber>
                <St.GridForm>
                  <St.FormCard>
                    <St.FormCardText>Titular do cartão *</St.FormCardText>
                    <St.HolderInput type="text" />
                  </St.FormCard>
                  <St.FormCard>
                    <St.FormCardText>Validade *</St.FormCardText>
                    <St.ValidityInput type="text" />
                  </St.FormCard>
                  <St.FormCard>
                    <St.FormCardText>CVC *</St.FormCardText>
                    <St.CVCInput type="number" />
                  </St.FormCard>
                </St.GridForm>
                <St.FormCardSelect>
                  <St.FormCardText>Número de parcelas</St.FormCardText>
                  <St.SelectCard name="Selecione o número de parcelas">
                    <St.OptionCard>1x</St.OptionCard>
                  </St.SelectCard>
                </St.FormCardSelect>
              </St.CardNumber>
            </St.CardData>
          </St.Data>
          <St.Resume>
            <St.ReserveResume>
              <St.TitleResume>Dados de sua reserva</St.TitleResume>
              <St.Details>
                <St.SubtitleResume>Entrada: </St.SubtitleResume>
                <St.TextResume>
                  domingo, 17 de novembro de 2019 a partir das 14:00
                </St.TextResume>
              </St.Details>
              <St.Details>
                <St.SubtitleResume>Saída: </St.SubtitleResume>
                <St.TextResume>
                  segunda-feira, 19 de novembro até 11:00
                </St.TextResume>
              </St.Details>
              <St.Details>
                <St.SubtitleResume>
                  Duração total da hospedagem:{" "}
                </St.SubtitleResume>
                <St.TextResume>2 diárias</St.TextResume>
              </St.Details>
            </St.ReserveResume>
            <St.PriceResume>
              <St.TitlePrice>Resumo do preço</St.TitlePrice>
              <St.ResumeValue>
                <St.TextPrice>Suíte premium</St.TextPrice>
                <St.TextPrice>180,00</St.TextPrice>
              </St.ResumeValue>
              <St.FinalPrice>
                <St.Price>
                  <St.TitleResume>Preço</St.TitleResume>
                  <St.TextPriceItalic>
                    (para todos os hóspedes)
                  </St.TextPriceItalic>
                </St.Price>
                <St.PriceValue>R$ 180,00</St.PriceValue>
              </St.FinalPrice>
            </St.PriceResume>
            <St.ConcludeReserve>
              <Btn to="/concluded">Concluir reserva</Btn>
            </St.ConcludeReserve>
          </St.Resume>
        </St.SectionPayment>
      </>
    );
  }
}

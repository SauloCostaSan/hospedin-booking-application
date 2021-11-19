import React from "react";
import { useNavigate, useParams } from "react-router";

import { daysLong, monthsLong } from "../utils/dateFormats";

import * as Gl from "../generalStyled/variables";
import * as St from "./styled";

import card from "../assets/images/svg/card-icon.svg";

export const Payment = () => {
  const navigate = useNavigate();

  let params = useParams();
  let checkOut = params.dateOut;
  let checkIn = params.dateIn;

  const days = Math.abs(new Date(checkOut) - new Date(checkIn));
  const diffDays = Math.ceil( days / (1000 * 60 * 60 * 24));

  function dateFormatted(date) {
    return (
      date &&
      daysLong[date.getDay()] +
        ", " +
        date.getDate() +
        " de " +
        monthsLong[date.getMonth()] +
        " de " +
        date.getFullYear()
    );
  }


  return (
    <St.SectionPayment>
      <St.Data>
        <St.FormsContainer>
          <St.PersonalData>
            <St.TitlePersonal>Dados pessoais</St.TitlePersonal>
            <St.FormPersonal>
              <St.FormPersonalText>
                Nome completo<b>*</b>
              </St.FormPersonalText>
              <St.Input type="name" required />
            </St.FormPersonal>
            <St.FormPersonal>
              <St.FormPersonalText>
                E-mail<b>*</b>
              </St.FormPersonalText>
              <St.Input type="email" placeholder="contato@email.com" required />
            </St.FormPersonal>
          </St.PersonalData>
          <St.CardData>
            <Gl.H2>Dados do cartão</Gl.H2>
            <St.TextCard>
              Você não será cobrado agora. Solicitamos os dados do cartão para
              garantir a reserva e realizar a cobrança em caso de cancelamento 7
              dias antes da reserva.
            </St.TextCard>
            <St.CardNumber>
              <St.FormCardText>Número do cartão *</St.FormCardText>
              <St.InputNumber>
                <St.IconCard src={card} />
                <St.InputCard
                  type="number"
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </St.InputNumber>
              <St.GridForm>
                <St.FormCard>
                  <St.FormCardText>Titular do cartão *</St.FormCardText>
                  <St.HolderInput type="name" required />
                </St.FormCard>
                <St.FormCard>
                  <St.FormCardText>Validade *</St.FormCardText>
                  <St.ValidityInput
                    type="number"
                    placeholder="00/00"
                    required
                  />
                </St.FormCard>
                <St.FormCard>
                  <St.FormCardText>CVC *</St.FormCardText>
                  <St.CVCInput type="password" placeholder="000" required />
                </St.FormCard>
              </St.GridForm>
            </St.CardNumber>
            <St.FormCardSelect>
              <St.FormCardText>Número de parcelas</St.FormCardText>
              <St.SelectCard>
                <St.OptionCard>Selecione o número de parcelas</St.OptionCard>
                <St.OptionCard>1x </St.OptionCard>
                <St.OptionCard>2x </St.OptionCard>
                <St.OptionCard>3x </St.OptionCard>
              </St.SelectCard>
            </St.FormCardSelect>
          </St.CardData>
        </St.FormsContainer>
        <St.Concluded>
          <St.ConcludeReserve>
            <St.Resume>
              <St.ReserveResume>
                <St.TitleResume>Dados de sua reserva</St.TitleResume>
                <St.Details>
                  <St.SubtitleResume>Entrada: </St.SubtitleResume>
                  <St.TextResume>
                    {dateFormatted(new Date(params.dateIn))} a partir das 14:00
                  </St.TextResume>
                </St.Details>
                <St.Details>
                  <St.SubtitleResume>Saída: </St.SubtitleResume>
                  <St.TextResume>
                    {dateFormatted(new Date(params.dateOut))} até 11:00
                  </St.TextResume>
                </St.Details>
                <St.Details>
                  <St.SubtitleResume>
                    Duração total da hospedagem:{" "}
                  </St.SubtitleResume>
                  <St.TextResume>
                    {diffDays > 1 ? `${diffDays} diárias` : `${diffDays} diária`}
                  </St.TextResume>
                </St.Details>
              </St.ReserveResume>
              <St.PriceResume>
                <St.TitlePrice>Resumo do preço</St.TitlePrice>
                <St.ResumeValue>
                  <St.TextPrice>{params.nameRoom}</St.TextPrice>
                  <St.TextPrice>{params.price}</St.TextPrice>
                </St.ResumeValue>
                <St.FinalPrice>
                  <St.Price>
                    <St.TitleResume>Preço</St.TitleResume>
                    <St.TextPriceItalic>
                      (para todos os hóspedes)
                    </St.TextPriceItalic>
                  </St.Price>
                  <St.PriceValue>{params.price}</St.PriceValue>
                </St.FinalPrice>
              </St.PriceResume>
            </St.Resume>
            <St.ButtonContainer>
              <St.BtnSubmit  onClick={() => navigate(`/concluded`)}>
                Concluir Reserva
              </St.BtnSubmit>
            </St.ButtonContainer>
          </St.ConcludeReserve>
        </St.Concluded>
      </St.Data>
    </St.SectionPayment>
  );
};

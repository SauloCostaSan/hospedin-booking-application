import React from "react";
import { CommodityDetails } from "./ComodityDetails";

import * as Gl from "../../generalStyled/variables";
import * as St from "./styled";

import mapIcon from "../../assets/images/svg/map-icon.svg";

export const HotelDetails = () => {
    return (
      <>
      <Gl.Container>
        <St.Inn>
          <St.InnInformation>
            <Gl.H1>{"Pousada Na Tribu's"}</Gl.H1>
            <St.InnDescription>
              Próximo aos setores de entretenimento e empresarial, o Plaza
              Bittar Hotel fica a 1 quarteirão do Shopping Brasília e a 15
              minutos de carro do Aeroporto Internacional de Brasília. Os
              quartos dispõem de ar-condicionado, e o Wi-Fi...
            </St.InnDescription>

            <St.Commodity>
              <Gl.H2>Comodidades do hotel</Gl.H2>
              <CommodityDetails />
            </St.Commodity>
          </St.InnInformation>
          <St.InnAddress>
            <St.CardMap>
              <St.ViewMap>
                <St.ViewButton href="#">
                  <St.Icon src={mapIcon}></St.Icon>
                  <St.ViewText>Visualizar no mapa</St.ViewText>
                </St.ViewButton>
              </St.ViewMap>
              <St.Address>
                <St.AddressText>
                  Av. Porto Novo, 764-806 - Ibiraquera, Imbituba - SC
                </St.AddressText>
              </St.Address>
            </St.CardMap>
            <St.CheckInfo>
              <St.CheckText>
                <b>Check in:</b> 14:00 às 17:00
              </St.CheckText>
              <St.CheckText>
                <b>Check out:</b> até às 11:00
              </St.CheckText>
            </St.CheckInfo>
            <St.CheckInfo>
              <St.CancelText>
                <b>Cancelamento grátis:</b> até 7 dias antes da sua reserva.
              </St.CancelText>
            </St.CheckInfo>
          </St.InnAddress>
        </St.Inn>
        </Gl.Container>
      </>
    );
  }


import React , { useState } from "react";
import { CommodityDetails } from "./ComodityDetails";

import * as Gl from "../../generalStyled/variables";
import * as St from "./styled";

import mapIcon from "../../assets/images/svg/map-icon.svg";
import arrowDown from "../../assets/images/svg/arrow-down-icon.svg";
import arrowUp from "../../assets/images/svg/arrow-up-icon.svg";

export const HotelDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [changeArrow, setChangeArrow] = useState(false);
  const [changeText, setChangeText] = useState(false);

  const expandDetails = () => {
    setShowDetails((prevState) => !prevState);
    setChangeArrow((prevState) => !prevState);
    setChangeText((prevState) => !prevState);
  };

  return (
    <>
      <Gl.Container>
        <St.Inn>
          <St.InnInformation>
            <Gl.H1>{"Pousada Na Tribu's"}</Gl.H1>
            <St.InnDescription id="description">
              Próximo aos setores de entretenimento e empresarial, o Plaza
              Bittar Hotel fica a 1 quarteirão do Shopping Brasília e a 15
              minutos de carro do Aeroporto Internacional de Brasília. Os
              quartos dispõem de ar-condicionado, e o Wi-Fi { " " }
              {showDetails ? (
                <St.DetailsText>
                  de ótima qualidade e disponível em todas as dependências da
                  pousada, o melhor lugar para sua hospedagem na região.
                </St.DetailsText>
              ) : (
                <St.DetailsText> ...</St.DetailsText>
              )}
            </St.InnDescription>
              <St.ExpandBtn onClick= {expandDetails}>
                <St.Icon src={changeArrow ? arrowUp : arrowDown} />
                <St.ExpandText>{changeText ? `Ocultar descrição do hotel ` : `Expandir descrição do hotel`}</St.ExpandText>
              </St.ExpandBtn>

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
};

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ptBR from "date-fns/locale/pt-BR";

import { getRooms } from "../../services/getRooms";
import { GlobalContext } from "../../contexts/GlobalContext";

import { Amenities } from "./Amenities";
import { InitialCards } from "./InitialCards";

import "react-datepicker/dist/react-datepicker.css";
import * as Gl from "../../generalStyled/variables";
import * as St from "./styled";

import users from "../../assets/images/svg/users-icon.svg";
import arrowDown from "../../assets/images/svg/arrow-down-icon.svg";
import arrowUp from "../../assets/images/svg/arrow-up-icon.svg";

export const RoomCards = () => {
  const navigate = useNavigate();
  const { states, setters } = useContext(GlobalContext);
  const { checkIn, checkOut } = states;
  const { setCheckIn, setCheckOut, setPriceRoom } = setters;

  const [renderRooms, setRenderRooms] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [itemSelected, setItemSelected] = useState("");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [changeArrow, setChangeArrow] = useState(false);
  const [changeText, setChangeText] = useState(false);

  const onChangeCalendar = (dates) => {
    const [checkIn, checkOut] = dates;
    setCheckIn(checkIn);
    setCheckOut(checkOut);
  };

  const dateInitialFormatted = (date) =>
    Intl.DateTimeFormat("fr-CA").format(date);

  async function showRooms() {
    let response = await getRooms(
      dateInitialFormatted(checkIn),
      dateInitialFormatted(checkOut)
    );
    console.log(response);
    setRooms(response.data);
    setRenderRooms(true);
  }

  const moreInfos = (itemId) => {
    setShowMoreInfo((prevState) => !prevState);
    setChangeArrow((prevState) => !prevState);
    setChangeText((prevState) => !prevState);
    setItemSelected(itemId);
  };

  const CardDetail = rooms.map((room, index) => {
    return (
      <St.RoomCard key={room.name}>
        <St.Room>
          <St.TypeRoom>
            <St.ImgRoom src={room.picture_url} />
            <St.TextRoom>{room.name}</St.TextRoom>
          </St.TypeRoom>
          <St.PriceRoom>
            <St.TextRoom>R$ {room.amount}</St.TextRoom>
          </St.PriceRoom>
          <St.Capacity>
            <St.IconCap src={users} />
            <St.TextRoom>{room.occupation}</St.TextRoom>
          </St.Capacity>
          <St.ReserveBtn>
            <Gl.Btn
              onClick={() =>
                navigate(
                  `/payment/${room.name}/${room.amount}/${checkIn}/${checkOut}`
                )
              }
            >
              Reservar
            </Gl.Btn>
          </St.ReserveBtn>
          <St.CardFooter>
            {showMoreInfo && itemSelected === index && (
              <St.MoreInfoExpand>
                <St.Info>
                  <St.H3Info>Sobre o quarto</St.H3Info>
                  <Gl.Text>{room.description}</Gl.Text>
                </St.Info>
                <St.Info>
                  <St.H3Info>Acomodações</St.H3Info>
                  <Gl.Text>{room.accommodation}</Gl.Text>
                </St.Info>
                <St.RoomCommodity>
                  <St.H3Amenities>Comodidades</St.H3Amenities>
                  <Amenities data={room.amenities} />
                </St.RoomCommodity>
              </St.MoreInfoExpand>
            )}
            <St.Expand onClick={() => moreInfos(index)}>
              <St.IconInfo src={changeArrow ? arrowUp : arrowDown} />
              {changeText ? (
                <Gl.SmallText>Menos Informações</Gl.SmallText>
              ) : (
                <Gl.SmallText>Mais Informações</Gl.SmallText>
              )}
            </St.Expand>
          </St.CardFooter>
        </St.Room>
      </St.RoomCard>
    );
  });

  return (
    <St.HotelDates>
      <St.ContainerReserve>
        <St.ReserveDate>
          <Gl.H2>Reserve a sua acomodação</Gl.H2>
          <St.Dates>
            <St.DateInput>
              <St.Picker
                locale={ptBR}
                selected={checkIn}
                minDate={new Date()}
                maxDate={checkOut}
                onChange={(date) => {
                  setCheckIn(date);
                }}
                dateFormat=" eee, dd MMM "
                placeholderText="Check in"
              />
            </St.DateInput>
            <St.DivisionDate />
            <St.DateInput>
              <St.Picker
                locale={ptBR}
                selected={checkOut}
                minDate={checkIn}
                onChange={(date) => setCheckOut(date)}
                onCalendarClose={() => showRooms()}
                dateFormat=" eee, dd MMM "
                placeholderText="Check out"
              />
            </St.DateInput>
            <St.PickerCalendar
              locale={ptBR}
              selected={checkIn}
              onChange={onChangeCalendar}
              onCalendarClose={() => showRooms()}
              startDate={checkIn}
              endDate={checkOut}
              selectsRange
              // inline
            />
          </St.Dates>
        </St.ReserveDate>
        <St.Division />
        <St.SectionRooms>
          <St.Room>
            <St.TitleType>Tipo de Quarto</St.TitleType>
            <St.TitlePrice>Preço por noite</St.TitlePrice>
            <St.TitleCapacity>Capacidade</St.TitleCapacity>
          </St.Room>
          {renderRooms ? CardDetail : <InitialCards />}
        </St.SectionRooms>
      </St.ContainerReserve>
    </St.HotelDates>
  );
};

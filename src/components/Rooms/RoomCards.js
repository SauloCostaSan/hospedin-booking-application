import React, { useState, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getRooms } from "../../services/getRooms";
import { routePayment } from "../../routes/navigate";
import { Amenities } from "./Amenities";
import { Button } from "../User/Button";

import { InitialCards } from "./InitialCards";
import "react-datepicker/dist/react-datepicker.css";

import * as Gl from "../../generalStyled/variables";
import * as St from "./styled";

import users from "../../assets/images/svg/users-icon.svg";
import arrowDown from "../../assets/images/svg/arrow-down-icon.svg";
import arrowUp from "../../assets/images/svg/arrow-up-icon.svg";
import calendar from "../../assets/images/svg/calendar-icon.svg";
import { useNavigate } from "react-router-dom";

export const RoomCards = () => {
  const navigate = useNavigate();
  const { states, setters } = useContext(GlobalContext);
  const { checkIn, checkOut} = states;
  const { setCheckIn, setCheckOut, setPriceRoom } = setters;

  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [itemSelected, setItemSelected] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [changeArrow, setChangeArrow] = useState(false);
  const [changeText, setChangeText] = useState(false);

  const ShowRooms = (date) => {
    setCheckOut(date);
    setIsLoading(true);
    getRooms(setRooms, setIsLoading);
  }
  // const formatDate = (date) => Intl.DateTimeFormat("fr-CA").format(date);

  const roomPayment = (nameRoom, priceRoom) => {
    setPriceRoom(priceRoom);
    routePayment(navigate, nameRoom)
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
            <St.TextRoom>R$ {room.amount.toFixed(3)}</St.TextRoom>
          </St.PriceRoom>
          <St.Capacity>
            <St.IconCap src={users} />
            <St.TextRoom>{room.occupation}</St.TextRoom>
          </St.Capacity>
          <St.ReserveBtn>
            <Button onClick={() => roomPayment(room.name, room.amount)} />
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
              <Gl.SmallText
                onClick={
                  changeText ? (
                    <Gl.Text>Menos Informações</Gl.Text>
                  ) : (
                    <Gl.Text>Mais Informações</Gl.Text>
                  )
                }
              />
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
                selected={checkIn}
                minDate={new Date()}
                maxDate={checkOut}
                onChange={(date) => setCheckIn(date)}
                dateFormat="MMM dd, yyyy"
                placeholderText="Check in"
              />
            </St.DateInput>
            <St.DivisionDate />
            <St.DateInput>
              <St.Picker
                selected={checkOut}
                minDate={checkIn}
                onChange={(date) => ShowRooms(date)}
                dateFormat= "MMM dd, yyyy"
                placeholderText="Check out"
              />
            </St.DateInput>
            <St.CalendarBox>
              <St.Calendar src={calendar} />
            </St.CalendarBox>
          </St.Dates>
        </St.ReserveDate>
        <St.Division />
        <St.SectionRooms>
          <St.Room>
            <St.TitleType>Tipo de Quarto</St.TitleType>
            <St.TitlePrice>Preço por noite</St.TitlePrice>
            <St.TitleCapacity>Capacidade</St.TitleCapacity>
          </St.Room>
          {isLoading ? <InitialCards /> :  CardDetail }
        </St.SectionRooms>
      </St.ContainerReserve>
    </St.HotelDates>
  );
};

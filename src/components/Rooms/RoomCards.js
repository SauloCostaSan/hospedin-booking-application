import React, { useState } from "react";
import { Amenities } from "./Amenities";
import { getRooms } from "../../services/getRooms"
import { Button } from "../User/Button";
import { InitialCards } from "./InitialCards";
import "react-datepicker/dist/react-datepicker.css";

// import { ExpandInfo } from "./ExpandInfo";

import * as Gl from "../../generalStyled/variables";
import * as St from "./styled";

import users from "../../assets/images/svg/users-icon.svg";
import arrowDown from "../../assets/images/svg/arrow-down-icon.svg";
import arrowUp from "../../assets/images/svg/arrow-up-icon.svg";
import calendar from "../../assets/images/svg/calendar-icon.svg";

export const RoomCards = () => {
  const [beginDate, setBeginDate] = useState();
  const [endDate, setEndDate] = useState();
  // const [priceRoom, setPriceRoom] = useState();

  const [rooms, setRooms] = useState([]);
  const [renderRoom, setRenderRoom] = useState(false);

  const [itemSelected, setItemSelected] = useState("");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [changeArrow, setChangeArrow] = useState(false);
  const [changeText, setChangeText] = useState(false);

  const formatDate = (date) => Intl.DateTimeFormat("fr-CA").format(date);

  // async function showRooms() {
  //   let beginDateFormat = formatDate(beginDate);
  //   let endDateFormat = formatDate(endDate);
  //   let response = await getRooms(beginDateFormat, endDateFormat);
  //   setEndDate(endDate);
  //   setRooms(response.data);
  //   setRenderRoom(true);
  // }
//  function showRooms(date) {
//     setEndDate(date);
//     getRooms();
//     setRenderRoom(true);
//     // setRenderRoom(true);
//   }

  // const endDateNumber = parseInt(setEndDate);

  const moreInfos = (itemId) => {
    setShowMoreInfo(!showMoreInfo);
    setChangeArrow((prevState) => !prevState);
    setChangeText((prevState) => !prevState);
    setItemSelected(itemId);
  };

  const RoomCards = rooms.map((room, index) => {
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
            <Button />
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
                onClick={changeText ? "Menos Informações" : "Mais Informações"}
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
                selected={beginDate}
                minDate={new Date()}
                // maxDate={endDate}
                onChange={(date) => setBeginDate(date)}
                // onCalendarClose={(date) => showRooms(date)}
                dateFormat="MMM dd, yyyy"
                placeholderText="Check in"
              />
              {/* <St.Picker
                  selected={beginDate ?? new Date()}
                  minDate={new Date()}
                  maxDate={endDate}
                  onChange={(date) => setBeginDate(date)}
                  placeholderText="Check in"
                  onCalendarClose={() => showRooms()}
                  dateFormat="dd/MM/yyyy"
                /> */}
            </St.DateInput>
            <St.DivisionDate />
            <St.DateInput>
              <St.Picker
                selected={endDate}
                minDate={beginDate}
                onChange={ endDate => setEndDate(endDate)}
                value={setEndDate}
                onCalendarClose={date => showRooms(date)}
                dateFormat="MMM dd, yyyy"
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
          {renderRoom ? RoomCards : <InitialCards />}
        </St.SectionRooms>
      </St.ContainerReserve>
    </St.HotelDates>
  );
};

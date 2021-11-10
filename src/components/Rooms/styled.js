import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../User/Button";

import styled from "styled-components";
import { variable, H1, H2, H3, SmallText, Container } from "../../generalStyled/variables";

import arrowDown from "../../assets/images/svg/arrow-down-icon.svg";

export const AmenitiesList = styled.div`
  display: flex;
  align-items: center;
`;
export const InitialSection = styled.div`
  background-color: ${variable.colors.white};
  border: 1px solid ${variable.colors.borderColor};
  border-radius: ${variable.radius[0]};
  padding: 24px 16px;
  margin-top: 8px;
`;
export const Initial = styled.div`
  box-sizing: border-box;
`;
export const SelectDates = styled.h1`
  font-family: ${variable.fonts.poppins};
  font-weight: ${variable.fontWeight[0]};
  font-size: ${variable.fontSize[3]};
  color: ${variable.colors.red};
`;
export const HotelDates = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${variable.colors.lightBlue};
  width: 100%;
  padding-bottom: 32px;
`;
export const ContainerReserve = styled(Container)`
  flex-direction: column;
`;
export const ReserveDate = styled.div`
  /* width: 50%; */
  padding-top: 40px;
`;
export const Division = styled.div`
  margin: 40px 0;
  height: 1px;
  background-color: ${variable.colors.borderColor};
`;
export const Dates = styled.div`
  background-color: ${variable.colors.white};
  border: 1px solid ${variable.colors.borderColor};
  border-radius: ${variable.radius[0]};
  width: fit-content;
  display: flex;
  align-items: center;
  margin-top: 8px;
`;
export const DateInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Arrow = styled.img`
  margin-right: 16px;
`;
export const Picker = styled(DatePicker)`
  border: none;
  padding: 16px;
  margin-right: 16px;
  color: ${variable.colors.blueTexts};
  font-family: ${variable.fonts.roboto};
  font-weight: ${variable.fontWeight[0]};
  font-size: ${variable.fontSize[2]};
  line-height: 19px;
  background: url(${arrowDown});
  background-repeat: no-repeat;
  background-position: right;
`;
export const DivisionDate = styled.div`
  width: 2px;
  height: 32px;
  background-color: ${variable.colors.borderColor};
`;
export const CalendarBox = styled.div`
  padding: 16px;
  border-left: 1px solid ${variable.colors.borderColor};
`;
export const Calendar = styled.img`
  width: 24px;
  height: 24px;
`;
export const SectionRooms = styled(Container)`
  max-width: 960px;
  width: 100%;
  flex-direction: column;
`;
export const RoomCard = styled(Container)`
  max-width: 960px;
  width: 100%;
`;
export const Room = styled.div`
  display: grid;
  grid-template: repeat(3, auto) / 4fr 1fr 1fr 2fr;
  width: 100%;
`;
export const TitleType = styled(H3)`
  grid-column-start: 1;
  grid-column-end: 1;
  white-space: nowrap;
`;
export const TitlePrice = styled(H3)`
  grid-column-start: 2;
  grid-column-end: 2;
  white-space: nowrap;
  text-align: right;
  margin-right: 24px;
`;
export const TitleCapacity = styled(H3)`
  grid-column-start: 3;
  grid-column-end: 3;
  white-space: nowrap;
  text-align: center;
`;
export const TypeRoom = styled.div`
  background-color: ${variable.colors.white};
  border: 1px solid ${variable.colors.borderColor};
  border-right: none;
  border-radius: ${variable.radius[0]} 0 0 0;
  grid-column: 1 / 1;
  display: flex;
  align-items: center;
  margin-top: 8px;
`;
export const ImgRoom = styled.img`
  max-width: 118px;
  width: 100%;
  max-height: 86px;
  object-fit: cover;
  padding-right: 15px;
`;
export const TextRoom = styled.p`
  font-family: ${variable.fonts.roboto};
  font-size: ${variable.fontSize[3]};
  line-height: ${variable.lineHeight[0]};
  color: ${variable.colors.blueTitles};
  /* max-width: 227px; */
`;
export const PriceRoom = styled.div`
  background-color: ${variable.colors.white};
  border: 1px solid ${variable.colors.borderColor};
  border-left: none;
  border-right: none;
  grid-column: 2 / 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;
  ${TextRoom} {
    margin-right: 24px;
  }
`;
export const Capacity = styled.div`
  background-color: ${variable.colors.white};
  border: 1px solid ${variable.colors.borderColor};
  border-left: none;
  border-right: none;
  grid-column: 3 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;
export const IconCap = styled.img`
  padding-right: 16px;
`;
export const ReserveBtn = styled.div`
  background-color: ${variable.colors.white};
  border: 1px solid ${variable.colors.borderColor};
  border-radius: 0 ${variable.radius[0]} 0 0;
  border-left: none;
  /* grid-row: 2 / 2; */
  grid-column: 4 / 4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
  margin-top: 8px;
`;
export const CardFooter = styled.div`
  grid-row: 3;
  grid-column: 1 / span 4;
  background-color: ${variable.colors.white};
  border: 1px solid ${variable.colors.borderColor};
  border-top: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;
export const MoreInfo = styled.div`
  padding: 8px 16px;
`;
export const MoreInfoExpand = styled.div`
  padding-left: 16px;
  max-width: 960px;
  width: 100%;
  box-sizing: border-box;
`;

export const IconInfo = styled.img`
  padding-right: 15px;
`;
export const Info = styled.div`
  grid-column: 1 / span 4;
  /* padding-top: 13px; */
  padding: 13px 0 16px 0;
  &:nth-child(2) {
    padding: 0;
  }
`;
export const H3Info = styled(H3)`
  padding-bottom: 6px;
`;
export const H3Amenities = styled(H3)`
  padding-bottom: 6px;
`;
export const RoomCommodity = styled.div`
  grid-column: 1 / span 4;
  padding: 13px 0 16px 0;
  /* flex-direction: column; */
`;
export const Commodity = styled.div`
  /* grid-column: 1 / span 4; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
`;
export const CommodityIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
export const CommodityText = styled.span``;
export const Expand = styled.button`
  box-sizing: border-box;
  padding: 8px;
  width: 100%;
  border-top: 1px solid ${variable.colors.borderColor};
  cursor: pointer;
`;

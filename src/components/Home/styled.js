import styled from "styled-components";

import { variable, Text, Container } from "../../gerenalStyles/variables";

import map from "../../assets/images/map.png";
import arrowDown from "../../assets/images/svg/arrow-dow-icon";

export const Inn = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding-top: 81px;
  column-gap: 120px;
`;
export const InnInformation = styled.div`
  /* padding-right: 121px; */
`;
export const InnDescription = styled(Text)`
  padding-top: 8px;
`;
export const Commodity = styled.div`
  padding-top: 32px;
`;
export const InnAddress = styled.div`
  width: 269px;
`;
export const CardMap = styled.div`
  background: ${variable.colors.lightBlue};
`;

export const ViewMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${map});
  height: 130px;
`;
export const ViewButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4px 16px;
  background-size: auto;
  background-color: ${variable.colors.white};
  border: 1px solid ${variable.colors.borderColor};
  border-radius: ${variable.radius[1]};
  text-decoration: none;
`;
export const ViewText = styled.p`
  border: none;
  background-color: unset;
  color: ${variable.colors.blueTexts};
  font-family: ${variable.fonts.roboto};
  font-weight: ${variable.fontWeight[0]};
  font-size: ${variable.fontSize[1]};
  line-height: ${variable.lineHeight[1]};
`;
export const Icon = styled.img`
  padding-right: 8px;
`;
export const Address = styled.div`
  padding: 16px;
`;
export const AddressText = styled.p`
  color: ${variable.colors.blueTexts};
  font-family: ${variable.fonts.poppins};
  font-weight: ${variable.fontWeight[0]};
  font-size: ${variable.fontSize[2]};
  line-height: ${variable.lineHeight[1]};
`;
export const CheckInfo = styled.div`
  padding-top: 16px;
  padding-bottom: 28px;

  &:last-child {
    padding-top: 0px;
    padding-bottom: 30px;
  }
`;
export const CheckText = styled.p`
  b {
    font-weight: ${variable.fontWeight[1]};
  }
  color: ${variable.colors.blueTitles};
  font-family: ${variable.fonts.poppins};
  font-weight: ${variable.fontWeight[0]};
  font-size: ${variable.fontSize[1]};
  line-height: ${variable.lineHeight[1]};
`;
export const CancelText = styled(CheckText)`
  b {
    display: block;
  }
`;
export const ComfortList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
`;
// export const Break = styled.div`
// flex-basis: 100%;
// height: 16px;
// `;
// export const BreakList = styled.div`
//   display: flex;
//   /* margin-right: 46px; */
//   /* flex-wrap: wrap; */
//   justify-content: flex-start;
// `;
export const Comfort = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0 8px 0;
`;
// export const ComfortRow2 = styled.div`
//   display: flex;
//   align-items: center;
// `;
export const IconComfort = styled.img`
  margin-right: 8px;
`;
export const TextComfort = styled(Text)``;

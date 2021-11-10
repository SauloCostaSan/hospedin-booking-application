import styled from "styled-components";
import { variable, H2, Text, Container } from "../generalStyled/variables";

export const PageReserve = styled.main`
  display:flex;
  flex-direction: column;
`;

export const SectionPayment = styled(Container)`
  padding-top: 80px;
  padding-bottom: 120px;
`;
export const Data = styled.form`
  max-width: 463px;
  max-height: 100%;
  padding-right: 120px;
`;
export const PersonalData = styled.div`
  flex-direction: column;
  width: 100%;
`;
export const TitlePersonal = styled(H2)`
  padding-bottom: 8px;
`;
export const FormPersonal = styled.div`
  &:last-child {
    padding-top: 16px;
  }
`;
export const FormPersonalText = styled.p`
  font-family: ${variable.fonts.poppins};
  font-size: ${variable.fontSize[2]};
  font-weight: ${variable.fontWeight[1]};
  line-height: ${variable.lineHeight[1]};
  color: ${variable.colors.blueTitles};
  padding-bottom: 8px;

  b {
    color: ${variable.colors.red};
  }
`;
export const Input = styled.input`
  background-color: ${variable.colors.white};
  color: ${variable.colors.borderColor};
  font-family: ${variable.fonts.roboto};
  font-size: ${variable.fontSize[3]};
  border: 1px solid ${variable.colors.borderColor};
  border-radius: ${variable.radius[0]};
  padding: 16px;
  width: 100%;
  box-sizing: border-box;

`;
export const CardData = styled.div`
  max-width: 463px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 48px;
`;
export const TextCard = styled(Text)`
  padding-top: 4px;
  padding-bottom: 16px;
`;
export const CardNumber = styled.div``;
export const InputNumber = styled.div`
  background-color: ${variable.colors.white};
  border: 1px solid ${variable.colors.borderColor};
  border-radius: ${variable.radius[0]};
  display: flex;
  align-items: center;
`;
export const InputCard = styled.input`
  background-color: ${variable.colors.white};
  color: ${variable.colors.borderColor};
  font-family: ${variable.fonts.roboto};
  font-size: ${variable.fontSize[3]};
  border: none;
  border-radius: ${variable.radius[0]};
  padding: 16px;
  max-width: 463px;
  width: 90%;
`;
export const IconCard = styled.img`
  padding-left: 16px;
`;
export const GridForm = styled.div`
  max-width: 463px;
  width: 100%;
  display: grid;
  grid-template-columns:
    minmax(auto, 255px)
    minmax(auto, 96px)
    minmax(auto, 80px);
  gap: 16px;
`;

export const FormCard = styled.div`
  flex-direction: column;
`;
export const FormCardText = styled.p`
  font-family: ${variable.fonts.poppins};
  font-size: ${variable.fontSize[2]};
  font-weight: ${variable.fontWeight[1]};
  line-height: ${variable.lineHeight[1]};
  color: ${variable.colors.blueTitles};
  padding-top: 16px;
  padding-bottom: 8px;
  white-space: nowrap;
`;
export const HolderInput = styled.input`
  background-color: ${variable.colors.white};
  color: ${variable.colors.borderColor};
  font-family: ${variable.fonts.roboto};
  font-size: ${variable.fontSize[3]};
  border: 1px solid ${variable.colors.borderColor};
  border-radius: ${variable.radius[0]};
  padding: 16px;
  width: inherit;
  box-sizing: border-box;
`;
export const ValidityInput = styled(HolderInput)`
max-width: 96px;
`;
export const CVCInput = styled(HolderInput)`
max-width: 80px;
`;
export const FormCardSelect = styled.div`
  width: 100%;
`;
export const SelectCard = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(arrowDown);
  background-color: ${variable.colors.white};
  color: ${variable.colors.borderColor};
  font-family: ${variable.fonts.roboto};
  font-size: ${variable.fontSize[3]};
  border: 1px solid ${variable.colors.borderColor};
  border-radius: ${variable.radius[0]};
  padding: 16px;
  width: 100%;
`;
export const OptionCard = styled.option`
  background-color: ${variable.colors.white};
  color: ${variable.colors.borderColor};
  font-family: ${variable.fonts.roboto};
  font-size: ${variable.fontSize[3]};
  border: 1px solid ${variable.colors.borderColor};
  border-radius: ${variable.radius[0]};
  padding: 16px;
  width: 100%;
`;
export const Resume = styled.div`
  height: 100%;
`;
export const ReserveResume = styled.div`
  background-color: ${variable.colors.lightBlue};
  border-radius: ${variable.radius[0]};
  padding: 16px;
  margin-bottom: 24px;
`;
export const TitleResume = styled.h4`
  font-family: ${variable.fonts.poppins};
  font-size: ${variable.fontSize[3]};
  font-weight: ${variable.fontWeight[1]};
  line-height: ${variable.lineHeight[2]};
  color: ${variable.colors.blueTitles};
`;
export const Details = styled.div`

  &:first-child {
    padding-top: 8px;
  }
  &:nth-child(3){
    padding: 16px 0;
  }
`;
export const SubtitleResume = styled.p`
  font-family: ${variable.fonts.poppins};
  font-size: ${variable.fontSize[3]};
  font-weight: ${variable.fontWeight[1]};
  line-height: ${variable.lineHeight[2]};
  color: ${variable.colors.blueTitles};
  padding-bottom: 4px;
  white-space: nowrap;
`;
export const TextResume = styled.p`
  font-family: ${variable.fonts.roboto};
  font-size: ${variable.fontSize[2]};
  font-weight: ${variable.fontWeight[0]};
  line-height: ${variable.lineHeight[1]};
  color: ${variable.colors.blueTexts};
`;
export const PriceResume = styled.div`
  border: 1px solid ${variable.colors.borderColor};
  border-radius: ${variable.radius[0]};
`;
export const ResumeValue = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px 0px 16px;
`;
export const TitlePrice = styled(TitleResume)`
  padding: 16px 0 0 16px;
`;
export const TextPrice = styled(TextResume)`
  padding-top: 8px;
  padding-bottom: 24px;
`;
export const TextPriceItalic = styled(TextPrice)`
  font-style: italic;
  padding: 0;
`;
export const FinalPrice = styled.div`
  background-color: ${variable.colors.lightBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;
export const Price = styled.div`
  flex-direction: column;
`;
export const PriceValue = styled(TitleResume)`
  font-family: ${variable.fonts.roboto};
`;
export const ConcludeReserve = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 181px;
`;
export const Sucess = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  padding-top: 120px;
`;
export const TitleSucess = styled(H2)`
  padding-top: 40px;
`;
export const TextSucess = styled(Text)`
  width: 561px;
  padding-top: 16px;
  text-align: center;
`;

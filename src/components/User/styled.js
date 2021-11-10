import { Link } from "react-router-dom";

import styled from "styled-components";
import { variable } from "../../gerenalStyles/variables";


export const Btn = styled(Link)`
  background-color: ${variable.colors.orange};
  color: ${variable.colors.blueTitles};
  border-radius: ${variable.radius[1]};
  padding: 18px 24px;
  font-family: ${variable.fonts.poppins};
  font-size: ${variable.fontSize[3]} ;
  line-height: ${variable.lineHeight[2]};
  white-space: nowrap;
  text-decoration: none;
`;

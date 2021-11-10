export const variable = {
  colors: {
    white: "#FFFFFF",
    lightBlue: "#F3F6FD",
    blueTitles: "#29415E",
    blueTexts: "#536580",
    blueArrow: "#406591",
    orange: "#FBDE64",
    red: "#D64753",
    borderColor: "#CFD9E7",
    green: "#3BDBC9",
  },
  fonts: {
    poppins: "Poppins",
    roboto: "Roboto",
  },
  fontSize: ["12px", "14px", "16px", "18px", "24px", "32px"],
  fontWeight: [400, 700],
  lineHeight: ["21px", "24px", "27px", "36px", "48px"],
  radius: ["4px", "100px"],
};
export const H1 = styled.h1`
  color: ${variable.colors.blueTitles};
  font-family: ${variable.fonts.poppins};
  font-weight: ${variable.fontWeight[1]};
  font-size: ${variable.fontSize[5]};
  line-height: ${variable.lineHeight[4]};
`;

export const H2 = styled.h2`
  color: ${variable.colors.blueTitles};
  font-family: ${variable.fonts.poppins};
  font-weight: ${variable.fontWeight[1]};
  font-size: ${variable.fontSize[4]};
  line-height: ${variable.lineHeight[3]};
`;

export const H3 = styled.h3`
  color: ${variable.colors.blueTitles};
  font-family: ${variable.fonts.poppins};
  font-weight: ${variable.fontWeight[1]};
  font-size: ${variable.fontSize[2]};
  line-height: ${variable.lineHeight[1]};
`;

export const Text = styled.p`
  color: ${variable.colors.blueTexts};
  font-family: ${variable.fonts.roboto};
  font-weight: ${variable.fontWeight[0]};
  font-size: ${variable.fontSize[2]};
  line-height: ${variable.lineHeight[1]};
`;

export const SmallText = styled.span`
  color: ${variable.colors.blueTitles};
  font-family: ${variable.fonts.roboto};
  font-weight: ${variable.fontWeight[0]};
  font-size: ${variable.fontSize[1]};
  line-height: ${variable.lineHeight[0]};
`;
export const SmallExpand = styled.span`
  color: ${variable.colors.blueArrow};
  font-family: ${variable.fonts.roboto};
  font-weight: ${variable.fontWeight[0]};
  font-size: ${variable.fontSize[0]};
  line-height: ${variable.lineHeight[0]};
`;

//responsive containers
export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;

  @media (max-width: 575px) {
    max-width: 100%;
    margin: 0 auto;
    /* width: 540px; */
  }

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 960px;
  }

  @media (min-width: 1400px) {
    width: 960px;
  }
`;

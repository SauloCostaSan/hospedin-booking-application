import React from "react";
import { Routers } from "./routes/Routers";

import { GlobalStyle } from "./generalStyled/GlobalStyles";

export default function App() {
  return (
    <>
       <Routers />
      <GlobalStyle />
    </>
  );
}

import React from "react";
import { Routers } from "./routes/Routers";
import { GlobalState } from "./contexts/GlobalState";
import { GlobalStyle } from "./generalStyled/GlobalStyles";

export default function App() {
  return (
    <GlobalState>
       <Routers />
      <GlobalStyle />
    </GlobalState>
  );
}

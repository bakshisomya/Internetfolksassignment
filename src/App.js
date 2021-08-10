import React from "react";
import Mainbody from "./Components/Mainbody/Mainbody";
import Nav from "./Components/Nav/Nav";
import { Wrapper } from "./Components/Wrapper.style";
import { GlobalStyle } from "./Globalstyles.style";
function App() {
  return (
    <Wrapper bg="white">
      <Nav />
      <Mainbody />
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
import React from "react";
import FirstAndSecond from "./components/FirstAndSecond";
import { Main, Section, Sticky } from "./styles";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />

      <Main style={{ height: "1610vh" }}>
        <Section style={{ height: "72.7%" }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: "9.7%" }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: "10.1%" }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
}

export default App;

// eslint-disable-next-line no-unused-vars
import React from "react";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import AppRouter from "./router/AppRouter";
import MyFooter from "./components/UI/Footer/MyFooter";
import styled from "styled-components";

function App() {
  return (
    <Background>
      <MyNavbar></MyNavbar>
      <AppRouter></AppRouter>
      <MyFooter></MyFooter>
    </Background>
  );
}

export default App;

const Background = styled.div`
  background-color: #313338
`
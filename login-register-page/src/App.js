import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Registration from "./components/Registration";
import "./App.css";

function App() {
  return (
    <Container>
      <Login />
      <Line />
      <Registration />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 650px;
  height: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid white;
  border-radius: 15px;
  background: white;
  flex-wrap: wrap;
  margin-top: 150px;
`;

const Line = styled.div`
  border-left: 1px dotted grey;
  height: 350px;
`;

import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Registration from "./Registration";

function LoginReg() {
  return (
    <Container>
      <Content>
        <Login />
        <Line />
        <Registration />
      </Content>
    </Container>
  );
}

export default LoginReg;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
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

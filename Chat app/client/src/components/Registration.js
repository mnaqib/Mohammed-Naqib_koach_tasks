import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/api/v1/auth/register",
        {
          username,
          email,
          password,
          mobile,
        }
      );
      alert(`You Have Successfully Registered Please login`);
      setEmail("");
      setPassword("");
      setMobile("");
      setUsername("");
    } catch (err) {
      console.log(err);
      alert("Email already exists. Please Login!");
    }
  };

  const handleDisable = () => {
    if (email && password && mobile && username) {
      return false;
    }
    return true;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Span>Register</Span>
        <Content>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter full name"
          />
        </Content>
        <Content>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email id"
          />
        </Content>
        <Content>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
          />
        </Content>
        <Content>
          <Input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="text"
            placeholder="Enter mobile no"
          />
        </Content>
        <Content>
          <InputBtn disabled={handleDisable()} type="submit" value="Register" />
        </Content>
      </form>
    </Container>
  );
}

export default Registration;

const Container = styled.div`
  padding: 15px 15px;
`;

const Content = styled.div`
  padding: 10px 10px;
`;

const Input = styled.input`
  padding: 5px 5px;
  width: 235px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid grey;
`;

const InputBtn = styled.input`
  padding: 5px 5px;
  width: 250px;
  height: 45px;
  background: #12c2e9;
  border: none;
  font-size: 15px;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  transition: all 250ms;

  &:enabled {
    cursor: pointer;
  }

  &:hover:enabled {
    background: black;
  }
`;

const Span = styled.span`
  padding: 0px 5px;
  font-size: 25px;
  font-weight: bold;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 30%;
    bottom: 0;
    left: 6%;
    border-bottom: 1px solid black;
  }
`;

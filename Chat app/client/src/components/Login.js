import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../features/user/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      setEmail("");
      setPassword("");
      dispatch(
        setUserLogin({
          email,
          name: response.data.username,
          id: response.data._id,
        })
      );
      navigate("/home");
    } catch (err) {
      console.log(err);
      alert("Email or password incorrect");
    }
  };

  const handleDisable = () => {
    if (email && password) {
      return false;
    }
    return true;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Span>Login</Span>
        <Content>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email id"
            type="email"
          />
        </Content>
        <Content>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            type="password"
          />
        </Content>
        <Content>
          <InputBtn disabled={handleDisable()} type="submit" value="Login" />
        </Content>
      </form>
    </Container>
  );
}

export default Login;

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
    width: 40%;
    bottom: 0;
    left: 8%;
    border-bottom: 1px solid black;
  }
`;

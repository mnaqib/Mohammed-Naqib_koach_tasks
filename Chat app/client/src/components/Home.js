import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectId, setUsers } from "../features/user/userSlice";
import Chats from "./Chats";
import Header from "./Header";

function Home() {
  const id = useSelector(selectId);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsers = async () => {
      const users = await axios.get(`http://localhost:8800/api/v1/users/${id}`);
      dispatch(
        setUsers({
          users: users.data,
        })
      );
    };

    getUsers();
  }, [id]);
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Chats />
        </Content>
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 500px;
  height: 550px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid white;
  border-radius: 15px;
  background: transparent;
  overflow-y: hidden;
  border: 3px solid white;

  &:hover {
    overflow-y: auto;
  }
`;

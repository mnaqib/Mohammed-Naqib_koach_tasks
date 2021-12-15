import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { selectId, selectUsers } from "../features/user/userSlice";

function Chats() {
  const userId = useSelector(selectId);
  const navigate = useNavigate();
  const friends = useSelector(selectUsers);
  const [convUsers, setConvUsers] = useState([]);

  useEffect(() => {
    const getConv = async () => {
      try {
        const conversation = await axios.get(
          "http://localhost:8800/api/v1/conversations/find/" + userId
        );
        console.log(conversation.data);
        const list = conversation.data.map((conv) => {
          return conv.members[0] === userId ? conv.members[1] : conv.members[0];
        });
        setConvUsers(list);
      } catch (e) {
        console.log(e);
      }
    };
    getConv();
  }, []);

  const handleClick = async (o) => {
    if (!convUsers.includes(o._id)) {
      const newConv = axios.post("http://localhost:8800/api/v1/conversations", {
        senderId: userId,
        receiverId: o._id,
      });
    }
    navigate(`/chats/${o.username}`, { state: { id: o._id } });
  };

  return (
    <Container>
      {friends.map((o) => (
        <Content
          key={friends._id}
          onClick={(e) => {
            e.preventDefault();
            handleClick(o);
          }}
        >
          <Chatbtn>{o?.username}</Chatbtn>
        </Content>
      ))}
    </Container>
  );
}

export default Chats;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Chatbtn = styled.button`
  width: 450px;
  height: 50px;
  font-weight: bold;
  border: 2px solid black;
  padding: 10px;
  border-radius: 20px;
  margin: 10px 0px;
  font-size: 20px;
  background: white;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
  }
`;

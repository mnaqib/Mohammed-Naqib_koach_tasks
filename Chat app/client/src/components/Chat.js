import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { selectId } from "../features/user/userSlice";
import Header from "./Header";
import Message from "./Message";
import { io } from "socket.io-client";

function Chat() {
  const userId = useSelector(selectId);
  const user = useParams();
  const rec = useLocation();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [convId, setConvId] = useState("");
  const socket = useRef();
  const [arrivalMessage, setArrivalMessage] = useState("");

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", userId);
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/v1/messages/${convId}`
      );
      console.log(response.data);
      setMessages(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(rec);
    const getConversationId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/v1/conversations/find/${userId}/${rec.state.id}`
        );
        console.log(response.data._id);
        setConvId(response.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    getConversationId();
    if (convId) {
      fetchMessages();
    }
  }, [convId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId: rec.state.id,
      text: message,
    });
    try {
      const responde = await axios.post(
        "http://localhost:8800/api/v1/messages",
        {
          conversationId: convId,
          sender: userId,
          text: message,
        }
      );
      await fetchMessages();
    } catch (e) {
      console.log(e);
    }

    setMessage("");
  };
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Span>{user.id}</Span>
          {messages.map((message) => {
            return (
              <Message
                message={message}
                own={message.sender === userId ? true : false}
              />
            );
          })}
        </Content>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
            />
            <InputBtn type="submit" value="send" />
          </form>
        </FormContainer>
      </Container>
    </>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 500px;
  height: 550px;
  border: 2px solid white;
  border-radius: 15px;
  background: transparent;
  overflow-y: hidden;
  border: 3px solid white;

  &:scrolltop: &:scrollheight;
  &:hover {
    overflow-y: auto;
  }
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 25px;
  position: fixed;
  color: black;
  text-transform: uppercase;
  margin-left: 220px;
`;

const FormContainer = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  position: fixed;
  margin-top: 600px;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 15px;
  padding: 10px;
`;

const InputBtn = styled.input`
  background: white;
  width: 50px;
  height: 40px;
  border-radius: 50%;
  padding: 10px;
  border: none;
  margin-left: 5px;
  transition: all 250ms;
  font-weight: bold;

  &: hover {
    background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
  }
`;

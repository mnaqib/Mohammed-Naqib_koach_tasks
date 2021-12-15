import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  const signOut = () => {
    navigate("/");
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <Nav>
      <Logo onClick={handleClick} src="/images/chat.png" />
      <LogoutContainer>
        <Logout onClick={signOut}>Logout</Logout>
      </LogoutContainer>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 720px;
  cursor: pointer;
`;

const Logout = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: white;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    color: #000;
    border-color: transparent;
  }
`;

const LogoutContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

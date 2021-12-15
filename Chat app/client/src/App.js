import React from "react";
import "./App.css";
import LoginReg from "./components/LoginReg";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginReg />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chats/:id" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

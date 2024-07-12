import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login/Login";
import ForgotPassword from "./Login/ForgotPassword";
import Checkemail from "./Login/Checkemail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkemail" element={<Checkemail />} />
      </Routes>
    </Router>
  );
}

export default App;

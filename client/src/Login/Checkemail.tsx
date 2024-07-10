import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./Login.css";
import Logo from "./Logo.svg";
function Checkemail() {
  return (
    <div className="body">
      <div className="login">
        <img src={Logo} alt="OK studios logo" className="logo" />
        <Card body className="card">
          Check your email for a confimation link.
        </Card>
        <a href="login" className="link">
          ← Back to login
        </a>
      </div>
    </div>
  );
}

export default Checkemail;

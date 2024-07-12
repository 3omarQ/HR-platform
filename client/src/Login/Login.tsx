import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./Login.css";
import Logo from "./Logo.svg";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Email or password cannot be empty");
      return;
    }
    setError("");
    /*
      axios.post();
    */
  };

  return (
    <div className="body">
      <div className="login">
        <img src={Logo} alt="OK studios logo" className="logo" />
        <Card body className="card">
          <Form className="form" onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error}></ErrorMessage>}
            <Form.Group className="input">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={handleEmailChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={handlePasswordChange} />
            </Form.Group>

            <Form.Group className="check-button" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button className="button" variant="primary" type="submit">
              Log in
            </Button>
          </Form>
        </Card>
        <a href="forgotpassword" className="link">
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default Login;

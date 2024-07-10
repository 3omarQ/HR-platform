import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./Login.css";
import Logo from "./Logo.svg";
import ErrorMessage from "./ErrorMessage";
function ForgotPassword() {
  const description =
    "Please enter your username or email address. You will receive a link to create a new password via email.";
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setError("Email cannot be empty");
      return;
    }
    setError("");
    /*
      axios.post();
    */
    window.location.href = "checkemail";
  };

  return (
    <div className="body">
      <div className="login">
        <img src={Logo} alt="OK studios logo" className="logo" />
        <Card body className="card">
          <Form className="form" onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error}></ErrorMessage>}

            <p className="description">{description}</p>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={handleEmailChange} />
            </Form.Group>

            <Button className="button" variant="primary" type="submit">
              Get new password
            </Button>
          </Form>
        </Card>
        <a href="login" className="link">
          ← Back to login
        </a>
      </div>
    </div>
  );
}

export default ForgotPassword;

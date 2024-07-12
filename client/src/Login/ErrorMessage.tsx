import React from "react";
import { Card } from "react-bootstrap";

function ErrorMessage({ message }: { message: string }) {
  const variant = "light";

  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      border="danger"
      style={{ padding: "5%" }}
    >
      {message}
    </Card>
  );
}

export default ErrorMessage;

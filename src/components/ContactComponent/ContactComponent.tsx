import React, { useState } from "react";
import "./ContactComponent.scss";
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  Alert,
} from "react-bootstrap";

function ContactComponent() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  return (
    <>
      <Container>
        <Card className="my-5 p-4 text-center">
          <h1>Contact Me</h1>
          <Form.Floating className="d-flex justify-content-center aligh-items">
            <Form.Group>
              <Form.Label className="mt-3">Name</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleChange}
              ></Form.Control>
              <Form.Label className="mt-3">Email</Form.Label>
              <Form.Control
                className="mb-3"
                type="email"
                name="name"
                placeholder="Enter Your Email"
                value={name}
                onChange={handleChange}
              ></Form.Control>
              <Form.Label className="mt-3">Message</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                name="name"
                placeholder="Enter Your Message"
                value={name}
                onChange={handleChange}
              ></Form.Control>
              <Button
                className="mt-3"
                type="submit"
                variant="outline-primary"
                onClick={() => {
                  setAlert(true);
                }}
              >
                Submit
              </Button>
            </Form.Group>
          </Form.Floating>
          <Alert show={alert} className="mt-3" variant="success">
            Your message has been sent OK!
          </Alert>
        </Card>
      </Container>
    </>
  );
}

export default ContactComponent;

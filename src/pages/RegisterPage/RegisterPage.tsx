import React, { useState } from "react";
import "./RegisterPage.scss";
import { Card, Form, Button, Row , Col} from "react-bootstrap";
const userFormElements = {
  formElements: {
    username: {
      type: "text",
      value: "",
      validator: {
        required: true,
        minLength: 5,
        maxLength: 15,
      },
      touched: false,
      error: { status: true, message: "" },
    },
    email: {
      type: "email",
      value: "",
      validator: {
        required: true,
        pattern: "email",
      },
      touched: false,
      error: { status: true, message: "" },
    },
    password: {
      type: "password",
      value: "",
      validator: {
        required: true,
        minLength: 8,
        maxLength: 20,
      },
      touched: false,
      error: { status: true, message: "" },
    },
  },
  formValid: false,
};

function RegisterPage() {
  const [data, setData] = useState(userFormElements);

  function getErrorMessage(name: string): string {
    const message = data.formElements[name].error.message;
    return message;
  }

  function checkValidator(value: string, rule: any): any {
    let message: string = "";
    let valid: boolean = true;

    if (rule.required) {
      if (value.trim().length === 0) {
        valid = false;
        message = "กรุณากรอก username";
      }
    }

    if (value.length < rule.minLength && valid) {
      valid = false;
      message = `น้อยกว่า ${rule.minLength} ตัวอักษร`;
    }

    if (value.length > rule.maxLength && valid) {
      valid = false;
      message = `มากกว่า ${rule.maxLength} ตัวอักษร`;
    }

    if (rule.pattern === "email" && "valid") {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === false) {
        valid = false;
        message = "กรอกอีเมลไม่ถูกต้อง";
      }
    }
    return { status: !valid, message: message };
  }

  function handelFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name: string = event.target.name;
    const value: string = event.target.value;
    let updatedForm = { ...data.formElements };
    updatedForm[name].value = value;
    updatedForm[name].touched = true;
    const validatorObject = checkValidator(value, updatedForm[name].validator);
    updatedForm[name].error = {
      status: validatorObject.status,
      message: validatorObject.message,
    };
    let formStatus: boolean = true;
    for (let name in updatedForm) {
      if (updatedForm[name].validator.required === true) {
        formStatus = !updatedForm[name].error.status && formStatus;
      }
    }

    setData({
      ...data,
      formElements: updatedForm,
      formValid: formStatus,
    });
  }

  function getInputClass(name: string): string {
    const elementErrorStatus = data.formElements[name].error.status;

    return elementErrorStatus && data.formElements[name].touched
      ? "form-control is-invalid"
      : "form-control is-valid";
  }

  function handelFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData: any = {};

    for (let name in data.formElements) {
      formData[name] = data.formElements[name].value;
    }
    console.log(formData);
  }

  return (
    <>
    
      <Row className="m-5">
        <Col></Col>
        <Col>
          <div>
            <h4> RegisterPage </h4>
          </div>
          <Card>
            <Card.Body>
              <Form onSubmit={handelFormSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    className={getInputClass("username")}
                    id="username"
                    name="username"
                    onChange={handelFormChange}
                    style={{ width: "100%", padding: "10px 10px" }}
                  />
                  <div className="invalid-feedback">
                    {getErrorMessage("username")}
                  </div>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    className={getInputClass("email")}
                    id="email"
                    name="email"
                    onChange={handelFormChange}
                  />
                  <div className="invalid-feedback">
                    {getErrorMessage("email")}
                  </div>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    className={getInputClass("password")}
                    id="password"
                    name="password"
                    onChange={handelFormChange}
                  />
                  <div className="invalid-feedback">
                    {getErrorMessage("password")}
                  </div>
                </Form.Group>
                <Button
                  className="mt-5"
                  variant="primary"
                  type="submit"
                  disabled={!data.formValid}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default RegisterPage;

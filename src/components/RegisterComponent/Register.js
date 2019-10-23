import React from "react";

import { Button, Form } from "react-bootstrap";

const Register = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password" />
      </Form.Group>
      
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;

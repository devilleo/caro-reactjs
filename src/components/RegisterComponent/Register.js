import React from "react";

import { Button, Form } from "react-bootstrap";

const Register = ({ props }) => {
  const { registerSubmit, register_state, register, emailRegisterOnchange, passwordRegisterOnchange, passwordConfirmRegisterOnchange } = props;
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={register.email} onChange={e => emailRegisterOnchange(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={register.password} onChange={e=>passwordRegisterOnchange(e.target.value)}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password" value={register.passwordConfirm} onChange={e => passwordConfirmRegisterOnchange(e.target.value)}/>
      </Form.Group>

      <Button variant="success" type="button" onClick={registerSubmit}>
        Submit
      </Button>

      {register_state.isRegisterPending && <div>Please wait...</div>}
      {register_state.isRegisterSuccess && <div>Success.</div>}
      {register_state.registerError && <div>{register_state.registerError.message}</div>}
    </Form>
  );
};

export default Register;

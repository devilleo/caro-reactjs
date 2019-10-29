import React from "react"

import { Button, Form, Modal } from "react-bootstrap"

const Register = ({ props }) => {
  const {
    registerSubmit,
    register_state,
    register,
    emailRegisterOnchange,
    passwordRegisterOnchange,
    passwordConfirmRegisterOnchange
  } = props
  const { register_modal, RegisterModalClose } = props
  return (
    <Modal
      show={register_modal.isOpen}
      onHide={() => RegisterModalClose()}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="border-radius-2"
    >
      {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login
                </Modal.Title>
            </Modal.Header> */}
      <Modal.Body className="loginModal">
        <h3 style={{ textAlign: "center" }}>
          <img alt="" className="imgLogin" src="register.icon.png"></img>
        </h3>
        <Form className="loginForm">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={register.email}
              onChange={e => emailRegisterOnchange(e.target.value)}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={register.password}
              onChange={e => passwordRegisterOnchange(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={register.passwordConfirm}
              onChange={e => passwordConfirmRegisterOnchange(e.target.value)}
            />
          </Form.Group>
          {register_state.isRegisterPending && <div style={{ color: "red" }}>Please wait...</div>}
          {register_state.isRegisterSuccess && <div style={{ color: "red" }}>Success.</div>}
          {register_state.registerError && (
            <div style={{ color: "red" }}>{register_state.registerError.message}</div>
          )}
          <br></br>
          <div style={{ textAlign: "center" }}>
            <Button variant="success" type="button" style={{ width: "100%" }} onClick={registerSubmit}>
              Sign up
            </Button>
          </div>

          
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
                <Button variant="danger" onClick={() => LoginModalClose()}>Close</Button>
            </Modal.Footer> */}
    </Modal>
  )
}

export default Register

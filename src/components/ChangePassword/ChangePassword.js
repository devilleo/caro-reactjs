import React from "react"

import { Button, Form, Modal } from "react-bootstrap"

const ChangePassword = ({ props }) => {
  const {
    changePasswordSubmit,
    changePassword_state,
    changePassword,
    oldPasswordOfChangePasswordOnChange,
    newPasswordOfChangePasswordOnChange,
    confirmNewPasswordOfChangePasswordOnChange
  } = props
  const { changePassword_modal, changePasswordModalClose } = props
  return (
    <Modal
      show={changePassword_modal.isOpen}
      onHide={() => changePasswordModalClose()}
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
              type="password"
              placeholder="Old Password"
              value={changePassword.oldPassword}
              onChange={e => oldPasswordOfChangePasswordOnChange(e.target.value)}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="New Password"
              value={changePassword.newPassword}
              onChange={e => newPasswordOfChangePasswordOnChange(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              value={changePassword.confirmNewPassword}
              onChange={e => confirmNewPasswordOfChangePasswordOnChange(e.target.value)}
            />
          </Form.Group>
          {changePassword_state.isChangePasswordPending && <div style={{ color: "red" }}>Please wait...</div>}
          {changePassword_state.isChangePasswordSuccess && <div style={{ color: "red" }}>Change password success.</div>}
          {changePassword_state.isChangePasswordError && (
            <div style={{ color: "red" }}>{changePassword_state.isChangePasswordError.message}</div>
          )}
          <br></br>
          <div style={{ textAlign: "center" }}>
            <Button variant="success" type="button" style={{ width: "100%" }} onClick={changePasswordSubmit}>
              Change password
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

export default ChangePassword

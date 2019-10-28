import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Login = ({ props }) => {
    const { login, login_state, emailOnchange, passwordOnchange, loginSubmit } = props;
    const {login_modal, LoginModalClose} = props
    return (
        <Modal
            show={login_modal.isOpen}
            onHide={() => LoginModalClose()}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => emailOnchange(e.target.value)} value={login.email} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => passwordOnchange(e.target.value)} value={login.password} />
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="success" type="button" onClick={loginSubmit}>
                        Submit
                    </Button>
                    {login_state.isLoginPending && <div>Please wait...</div>}
                    {login_state.isLoginSuccess && <div>Success.</div>}
                    {login_state.loginError && <div>{login_state.loginError.message}</div>}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => LoginModalClose()}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
};

export default Login;

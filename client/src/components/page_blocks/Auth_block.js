import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../../utils/consts";

const AuthBlock = ( { emailState, passwordState, loginFunction } ) => {

    let [newEmailState, setNewEmailState] = useState("");
    let [newPasswordState, setPasswordState] = useState("");

    if (emailState == null) {
        emailState = { newEmailState, setNewEmailState };
        passwordState = { newPasswordState, setPasswordState };
        loginFunction = () => {}
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Authorization</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Input email" value={emailState.email} onChange={e => emailState.setEmail(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Input password" type="password" value={passwordState.password} onChange={e => passwordState.setPassword(e.target.value)}/>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                            No account? <NavLink className="text-decoration-none" to={REGISTRATION_ROUTE}>Register!</NavLink>
                        </div>
                        <Button
                            variant={"outline-success"}
                            onClick={loginFunction}
                        >
                            Log in
                        </Button>
                    </div>

                </Form>
            </Card>
        </Container>
    );
};

export default AuthBlock;

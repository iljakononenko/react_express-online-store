import React, {useContext, useState} from 'react';
import NavBar from "../../components/NavBars/NavBar";
import Auth_block from "../../components/page_blocks/Auth_block";
import {Context} from "../../index";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {ADMIN_ROUTE, EDITOR_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {login, loginAdmin} from "../../http/userApi";
import {Button, Card, Container, Form} from "react-bootstrap";

const AuthAdmin = () => {
    const {admin} = useContext(Context)
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();

    const click = async () => {
        try {
            let data;
            data = await loginAdmin(email, password);
            admin.setIsAuth(true)
            admin.setAdmin(data)
            history.push(ADMIN_ROUTE)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Admin Authorization</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Input email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Input password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            Log in
                        </Button>
                    </div>

                </Form>
            </Card>
        </Container>
    );
};

export default AuthAdmin;

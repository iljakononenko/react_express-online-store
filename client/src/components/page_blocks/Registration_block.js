import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {editor_links_style, EDITOR_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {registration} from "../../http/userApi";

const RegistrationBlock = () => {

    const {user} = useContext(Context)
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isRealPage = !location.pathname.includes(EDITOR_ROUTE);

    const click = async () => {
        if (isRealPage) {
            try {
                let data;
                data = await registration(email, password);
                user.setUser(data)
                user.setIsAuth(true)
                history.push(SHOP_ROUTE)
            } catch (e) {
                alert(e.response.data.message)
            }
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Registration</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Input email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Input password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                            Already have account? <NavLink className="text-decoration-none" to={isRealPage ? LOGIN_ROUTE : "#"}>Log in!</NavLink>
                        </div>
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            Register
                        </Button>
                    </div>

                </Form>
            </Card>
        </Container>
    );
};

export default RegistrationBlock;

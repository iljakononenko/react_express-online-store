import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {editor_links_style, EDITOR_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {login} from "../../http/userApi";
import {observer} from "mobx-react-lite";
import {renderCoreComponent} from "../../utils/components_map";

const AuthBlock = observer(({props}) => {

    const {user} = useContext(Context)
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const isRealPage = !location.pathname.includes(EDITOR_ROUTE);

    const click = async () => {
        if (isRealPage) {
            try {
                let data;
                data = await login(email, password);
                user.setIsAuth(true)
                user.setUser(data)
                history.push(SHOP_ROUTE)
            } catch (e) {
                alert(e.response.data.message)
            }
        }
    }

    console.log(props)

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                {renderCoreComponent(props[0].key, props[0].component_id, props[0].props)}
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Input email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Input password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                            {renderCoreComponent(props[1].key, props[1].component_id, props[1].props)} <NavLink data-id={props[2].id} className="text-decoration-none" to={isRealPage ? REGISTRATION_ROUTE : "#"}>{props[2].props.text}</NavLink>
                        </div>
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                            data-id={props[3].id}
                        >
                            {props[3].props.text}
                        </Button>
                    </div>

                </Form>
            </Card>
        </Container>
    );
});

export default AuthBlock;

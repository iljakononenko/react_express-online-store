import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {editor_links_style, EDITOR_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {registration} from "../../http/userApi";
import {renderCoreComponent} from "../../utils/components_map";

const RegistrationBlock = ({props}) => {

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
                {renderCoreComponent(props[0].key, props[0].component_id, props[0].props)}
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Input email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Input password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                            {renderCoreComponent(props[1].key, props[1].component_id, props[1].props)} <NavLink data-id={props[2].id} className="text-decoration-none" to={isRealPage ? LOGIN_ROUTE : "#"}>{props[2].props.text}</NavLink>
                        </div>
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {props[3].props.text}
                        </Button>
                    </div>

                </Form>
            </Card>
        </Container>
    );
};

export default RegistrationBlock;

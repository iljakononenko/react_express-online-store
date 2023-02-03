import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NavBar from "../components/NavBars/NavBar";
import Auth_block from "../components/page_blocks/Auth_block";
import Registration_block from "../components/page_blocks/Registration_block";

const Registration = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const click = async () => {
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

    return (
        <>
            <NavBar />
            <Registration_block emailState={ {email, setEmail} } passwordState={ {password, setPassword} } registerFunction={click} />
        </>
    );
});

export default Registration;

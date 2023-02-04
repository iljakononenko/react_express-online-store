import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NavBar from "../components/NavBars/NavBar";
import Auth_block from "../components/page_blocks/Auth_block";

const Auth = () => {

    return (
        <>
            <NavBar />
            <Auth_block />
        </>
    );
};

export default Auth;

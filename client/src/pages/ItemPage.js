import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image} from "react-bootstrap";
import bigStar from '../assets/bigStar.png';
import itemImg from '../assets/iphone.jpg';
import {useHistory, useLocation, useParams} from "react-router-dom";
import {fetchOneItem} from "../http/itemApi";
import NavBar from "../components/NavBars/NavBar";
import {login} from "../http/userApi";
import {CART_ROUTE, EDITOR_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {addItemToCart} from "../http/cartApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const ItemPage = observer(() => {

    const [item, setItem] = useState({})
    const {id} = useParams()
    const {user} = useContext(Context)
    const history = useHistory();

    const location = useLocation();
    const isRealPage = !location.pathname.includes(EDITOR_ROUTE);


    useEffect(() => {
        if (id != null && id !== undefined) {
            fetchOneItem(id).then(data => setItem(data))
        }
    }, [])

    const addToCart = async () => {
        if (isRealPage) {
            try {
                let result = await addItemToCart(id);
                history.push(CART_ROUTE)
            } catch (e) {
                alert(e.response.data.message)
            }
        }
    }

    return (
        <>
            <Container className="d-flex mt-3">
                <Col md={4}>
                    <Image width={300} height={300} src={item.img ? process.env.REACT_APP_URL_API + item.img : itemImg} />
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center">
                        <h2>{item.name ? item.name: "Product name"}</h2>
                        <div className="d-flex justify-content-center align-items-center"
                             style={{
                                 background: `url(${bigStar}) no-repeat center center`,
                                 width: 240,
                                 height: 240,
                                 backgroundSize: "cover",
                                 fontSize: 64
                             }}
                        >
                            {item.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around ms-auto"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey'}}
                    >
                        <h3>{item.price} zł</h3>
                        <Button
                            variant={"outline-dark"}
                            onClick={addToCart}
                        >
                            Purchase
                        </Button>
                    </Card>
                </Col>
            </Container>
        </>
    );
});

export default ItemPage;

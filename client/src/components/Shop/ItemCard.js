import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../../assets/star.png"
import {useHistory, useLocation} from "react-router-dom";
import {EDITOR_ROUTE, ITEM_ROUTE} from "../../utils/consts";
import itemImg from "../../assets/iphone.jpg"

const ItemCard = ({item, isDev = false}) => {

    const history = useHistory()
    const location = useLocation();
    const isRealPage = !location.pathname.includes(EDITOR_ROUTE);

    return (
        <Col md={3} className="mt-3" onClick={ isRealPage ? () => history.push(ITEM_ROUTE + "/" + item.id) : null }>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={ isDev ? itemImg : process.env.REACT_APP_URL_API + item.img} />
                <div className="text-black-50 d-flex justify-content-between align-items-center mt-2">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{item.rating}</div>
                        <Image width={20} height={20} src={star} />
                    </div>
                </div>
                <div>
                    {item.name}
                </div>
            </Card>
        </Col>
    );
};

export default ItemCard;

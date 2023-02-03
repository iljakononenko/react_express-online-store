import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = ({types, selectedType, setSelectedType}) => {

    return (
        <ListGroup>
            {types.map(type =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active={type.id === selectedType.id}
                    onClick={() => {setSelectedType(type)}}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default TypeBar;

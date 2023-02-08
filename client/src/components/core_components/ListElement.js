import React from 'react';
import * as uuid from "uuid";

const ListElement = ({keyProp, text = "input text", className= "", type = 0}) => {
    switch (type) {
        case 0:
            return <li key={keyProp} data-id={keyProp} data-custom-type={"li-text"} className={className}>{text}</li>
        case 1:
            return <ol key={keyProp} data-id={keyProp} data-custom-type={"li-text"} className={className}>{text}</ol>
        default:
            return <li key={keyProp} data-id={keyProp} data-custom-type={"li-text"} className={className}>{text}</li>
    }
};

export default ListElement;

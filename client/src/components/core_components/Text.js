import React from 'react';
import * as uuid from "uuid";

const Text = ({keyProp, text = "input text", className="", type}) => {
    className += " overflow-hidden pb-1"
    switch (type) {
        case 0:
            return <p key={keyProp} data-id={keyProp} data-custom-type={"text"} className={className}>{text}</p>
        case 1:
            return <h1 key={keyProp} data-id={keyProp} data-custom-type={"text"} className={className}>{text}</h1>
        case 2:
            return <h2 key={keyProp} data-id={keyProp} data-custom-type={"text"} className={className}>{text}</h2>
        case 3:
            return <h3 key={keyProp} data-id={keyProp} data-custom-type={"text"} className={className}>{text}</h3>
        case 4:
            return <h4 key={keyProp} data-id={keyProp} data-custom-type={"text"} className={className}>{text}</h4>
        case 5:
            return <h5 key={keyProp} data-id={keyProp} data-custom-type={"text"} className={className}>{text}</h5>
        case 6:
            return <h6 key={keyProp} data-id={keyProp} data-custom-type={"text"} className={className}>{text}</h6>
        case 7:
            return <span key={keyProp} data-id={keyProp} data-custom-type={"text"} className={className}>{text}</span>
        default:
            return <p key={keyProp} data-id={keyProp} data-custom-type={"text"} className={className}>{text}</p>
    }
};

export default Text;

import React from "react";

const Anchor = ({keyProp, text = "input text", className="", type, url}) => {
    switch (type) {
        case 0:
            return <a
                key={keyProp}
                data-id={keyProp}
                data-custom-type={"anchor"}
                className={className}
                href={url}
            >
                {text}
            </a>
        default:
            return <a
                key={keyProp}
                data-id={keyProp}
                data-custom-type={"anchor"}
                className={className}
                href={url}
            >
                {text}
            </a>
    }
}

export default Anchor;

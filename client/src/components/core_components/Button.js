import React from "react";

const Button = ({keyProp, className="", text, type}) => {
    switch (type) {
        case 0:
            return <button
                key={keyProp}
                data-id={keyProp}
                data-custom-type={"button"}
                className={className}
                type={"button"}
            >
                {text}
            </button>
        default:
            return <button
                key={keyProp}
                data-id={keyProp}
                data-custom-type={"button"}
                className={className}
                type={"button"}
            >
                {text}
            </button>
    }
}

export default Button;

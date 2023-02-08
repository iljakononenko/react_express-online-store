import React from "react";

const Img = ({keyProp, className="", src, alt, type}) => {
    switch (type) {
        case 0:
            return <img
                key={keyProp}
                data-id={keyProp}
                data-custom-type={"img"}
                className={className}
                src={src}
                alt={alt}
            />
        default:
            return <img
                key={keyProp}
                data-id={keyProp}
                data-custom-type={"img"}
                className={className}
                src={src}
                alt={alt}
            />
    }
}

export default Img;

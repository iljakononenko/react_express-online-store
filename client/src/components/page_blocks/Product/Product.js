import React from 'react';
import {renderCoreComponent} from "../../../utils/components_map";

const Product = ({props}) => {

    let result = renderCoreComponent(props[0].id, props[0].component_id, props[0].props)

    return (
        result
    );
};

export default Product;

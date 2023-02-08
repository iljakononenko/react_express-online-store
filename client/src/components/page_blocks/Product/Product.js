import React from 'react';
import {renderCoreComponent} from "../../../utils/components_map";

const Product = ({props}) => {

    let result = renderCoreComponent(props.id, props.component_id, props.props)

    return (
        result
    );
};

export default Product;

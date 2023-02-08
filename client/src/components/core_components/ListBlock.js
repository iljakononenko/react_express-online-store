import React from 'react';
import {renderCoreComponent} from "../../utils/components_map";

const ListBlock = ({className="", children}) => {
    return (
        <ul className={className}>
            {
                children.length > 0 ?
                    children.map(child => {
                        // console.log(child)
                        return renderCoreComponent(child.key, child.component_id, child.props)
                    })
                    :
                    ""
            }
        </ul>
    );
};

export default ListBlock;

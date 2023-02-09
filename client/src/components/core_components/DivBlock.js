import React from 'react';
import {renderCoreComponent} from "../../utils/components_map";

const DivBlock = ({keyProp, className="", children}) => {

    return (
        <div className={className}
            key={keyProp}
             data-id={keyProp}
             data-custom-type={"block"}
        >
            {
                children.length > 0 ?
                    children.map(child => {
                        // console.log(child)
                        return renderCoreComponent(child.key, child.component_id, child.props)
                    })
                    :
                    ""
            }
        </div>
    );
};

export default DivBlock;

import {default_nodes} from "./default_nodes";

const uuid = require('uuid')

export const shop_starting_elements = [
    {
        "id": uuid.v4(),
        "name": "Shop",
        "url": "/",
        "webpage_components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Header",
                "nodes": default_nodes[0]
            },
            {
                "key": uuid.v4(),
                "component_id": 1,
                "component_name": "Slider",
                "nodes": default_nodes[1]
            },
            {
                "key": uuid.v4(),
                "component_id": 2,
                "component_name": "Products",
                "nodes": []
            },
        ]
    },
    {
        "id": uuid.v4(),
        "name": "Item page",
        "url": "/item/:id",
        "webpage_components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Header",
                "nodes": []
            },
            {
                "key": uuid.v4(),
                "component_id": 5,
                "component_name": "Item info",
                "nodes": []
            },
        ]
    },
    {
        "id": uuid.v4(),
        "name": "Login",
        "url": "/login",
        "webpage_components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Header",
                "nodes": default_nodes[0]
            },
            {
                "key": uuid.v4(),
                "component_id": 3,
                "component_name": "Login",
                "nodes": default_nodes[3]
            }
        ]
    },
    {
        "id": uuid.v4(),
        "name": "Registration",
        "url": "/registration",
        "webpage_components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Header",
                "nodes": default_nodes[0]
            },
            {
                "key": uuid.v4(),
                "component_id": 4,
                "component_name": "Registration",
                "nodes": default_nodes[4]
            }
        ]
    },
]

export const single_page_starting_elements = [
    {
        "id": uuid.v4(),
        "name": "Landing",
        "url": "/",
        "webpage_components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Header",
                "nodes": default_nodes[0]
            },
            {
                "key": uuid.v4(),
                "component_id": 1,
                "component_name": "Slider",
                "nodes": default_nodes[1]
            },
            {
                "key": uuid.v4(),
                "component_id": 2,
                "component_name": "Products",
                "nodes": []
            },
        ]
    }
]


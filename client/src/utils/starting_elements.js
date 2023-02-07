const uuid = require('uuid')

export const shop_starting_elements = [
    {
        "id": uuid.v4(),
        "name": "Shop",
        "url": "/",
        "components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Header"
            },
            {
                "key": uuid.v4(),
                "component_id": 1,
                "component_name": "Slider"
            },
            {
                "key": uuid.v4(),
                "component_id": 2,
                "component_name": "Products"
            },
        ]
    },
    {
        "id": uuid.v4(),
        "name": "Item page",
        "url": "/item/:id",
        "components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Header"
            },
            {
                "key": uuid.v4(),
                "component_id": 5,
                "component_name": "Item info"
            },
        ]
    },
    {
        "id": uuid.v4(),
        "name": "Login",
        "url": "/login",
        "components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Header"
            },
            {
                "key": uuid.v4(),
                "component_id": 3,
                "component_name": "Login"
            }
        ]
    },
    {
        "id": uuid.v4(),
        "name": "Registration",
        "url": "/registration",
        "components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Header"
            },
            {
                "key": uuid.v4(),
                "component_id": 4,
                "component_name": "Registration"
            }
        ]
    },
]

export const single_page_starting_elements = [
    {
        "id": uuid.v4(),
        "name": "Landing",
        "url": "/",
        "components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Header"
            },
            {
                "key": uuid.v4(),
                "component_id": 1,
                "component_name": "Slider"
            },
            {
                "key": uuid.v4(),
                "component_id": 2,
                "component_name": "Products"
            },
        ]
    }
]


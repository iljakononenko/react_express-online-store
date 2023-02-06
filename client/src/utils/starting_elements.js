const uuid = require('uuid')

export const shop_starting_elements = [
    {
        "pageId": uuid.v4(),
        "pageName": "Shop",
        "pageUrl": "/",
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
        "pageId": uuid.v4(),
        "pageName": "Item page",
        "pageUrl": "/item/:id",
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
        "pageId": uuid.v4(),
        "pageName": "Login",
        "pageUrl": "/login",
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
        "pageId": uuid.v4(),
        "pageName": "Registration",
        "pageUrl": "/registration",
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
    {
        "pageId": uuid.v4(),
        "pageName": "Cart",
        "pageUrl": "/cart",
        "components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Test 3"
            },
            {
                "key": uuid.v4(),
                "component_id": 1,
                "component_name": "Test 3"
            },
            {
                "key": uuid.v4(),
                "component_id": 2,
                "component_name": "Test 3"
            }
        ]
    }
]

export const single_page_starting_elements = [
    {
        "pageId": uuid.v4(),
        "pageName": "Landing",
        "pageUrl": "/",
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


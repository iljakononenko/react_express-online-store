const uuid = require('uuid')

export const shop_starting_elements = [
    {
        "pageId": uuid.v4(),
        "pageName": "Shop",
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
        "components": [
            {
                "key": uuid.v4(),
                "component_id": 0,
                "component_name": "Test 1"
            },
            {
                "key": uuid.v4(),
                "component_id": 1,
                "component_name": "Test 1"
            },
            {
                "key": uuid.v4(),
                "component_id": 2,
                "component_name": "Test 1"
            }
        ]
    },
    {
        "pageId": uuid.v4(),
        "pageName": "Login",
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
        "pageName": "Cart",
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


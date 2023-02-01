import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const addItemToCart = async (product_id) => {
    const {data} = await $authHost.post('/api/cart/addToCart', {product_id})
    return data;
}

export const getCartItems = async () => {
    const {data} = await $authHost.get('/api/cart/')
    return data;
}

export const removeCartElement = async (cartElementId) => {
    const {data} = await $authHost.post('/api/cart/removeElement', {cartElementId});
    return data;
}

export const makeOrder = async (orderObject) => {
    const {data} = await $authHost.post('/api/cart/makeOrder', {orderObject});
}

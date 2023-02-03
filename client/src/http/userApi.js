import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const getAllOrders = async () => {
    const {data} = await $authHost.get('api/order/')
    return data;
}

export const getUserdata = async () => {
    const {data} = await $authHost.get('/api/user/data')
    return data;
}

export const changePassword = async (password, newPassword) => {
    const {data} = await $authHost.post('/api/user/changePassword', {password, newPassword})
    return data;
}

export const changeUserData = async (userData) => {
    const {data} = await $authHost.post('/api/user/changeUserData', {userData})
    return data;
}

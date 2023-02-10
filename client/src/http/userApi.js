import {$adminHost, $authHost, $host} from "./index";
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

export const loginAdmin = async (email, password) => {
    const {data} = await $host.post('api/admin/login', {email, password})
    let data_decoded = jwt_decode(data.token);
    console.log(data_decoded.role === "ADMIN")
    if (data_decoded.role === "ADMIN") {
        localStorage.setItem('admin_token', data.token)
        return data_decoded
    }
    return null;
}

export const checkAdmin = async () => {
    const {data} = await $adminHost.get('api/user/auth')
    let data_decoded = jwt_decode(data.token);
    if (data_decoded.role === "ADMIN") {
        localStorage.setItem('admin_token', data.token)
        return data_decoded
    }
    return null;
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const getAllOrders = async () => {
    const {data} = await $authHost.get('api/user/orders')
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

export const sendContactForm = async (formData) => {
    const {data} = await $host.post('api/user/forms', formData)
    return data;
}

export const fetchContactForms = async () => {
    const {data} = await $host.get('api/user/forms')
    return data;
}

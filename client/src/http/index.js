import axios from 'axios'

const $host = axios.create({
    baseURL: process.env.REACT_APP_URL_API
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_URL_API
})

const $adminHost = axios.create({
    baseURL: process.env.REACT_APP_URL_API
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

const adminAuthInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('admin_token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)
$adminHost.interceptors.request.use(adminAuthInterceptor)

export {
    $host,
    $authHost,
    $adminHost
}

import {$authHost, $host} from "./index";

export const fetchPages = async () => {
    const {data} = await $host.get('api/manager/pages')
    return data;
}


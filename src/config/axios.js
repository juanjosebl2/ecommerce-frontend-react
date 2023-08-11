import axios from "axios";

//Cors for the more secure access and protect data api
const clientAxios = axios.create({
    baseURL: 'https://ecommerce-backend-laravel-juan.up.railway.app/',
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true
})

export default clientAxios
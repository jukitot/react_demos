import axios from "axios";
import {baseURL} from "../Constants";
import {authService} from "./authService";

const axiosServise = axios.create({baseURL})
axiosServise.interceptors.request.use(request => {
    const token = authService.getToken()
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export {axiosServise}
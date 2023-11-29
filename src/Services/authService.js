import axios from "axios";
import {axiosServise} from "./axiosService";
import {urls} from "../Constants";

const authService = {
    register(data) {
        return axiosServise.post(urls.auth.register, data)
    },
    async login(data) {
        const {data: {access}} = await axiosServise.post(urls.auth.login, data);
        this.setToken(access)


    },
    me(){
        return axiosServise.get(urls.auth.me)
    },

    setToken(token) {
        localStorage.setItem('token', token)
    },
    getToken() {
        return localStorage.getItem('token')
    },
    deleteToken() {
        localStorage.removeItem('token')
    }
}
export {authService}
import {axiosServise} from "./axiosService";
import {urls} from "../Constants";
import {authService} from "./authService";

const carService = {
    getAll:(page='1')=>axiosServise.get(urls.cars.base, {params:{page}}),
    create:(data)=>axiosServise.post(urls.cars.base, data)
}

export {carService}
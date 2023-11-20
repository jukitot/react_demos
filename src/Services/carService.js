import {axiosServise} from "./axiosService";
import {urls} from "../Constants";

const carService = {
    getAll:()=>axiosServise.get(urls.cars.base)
}

export {carService}
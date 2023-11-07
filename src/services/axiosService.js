import {baseURL} from "../constanta/urls";
import axios from "axios";

const axiosService = axios.create({baseURL:baseURL})

export {axiosService}
import axios from "axios";
import {baseURL} from "../Constants";

const axiosServise = axios.create({baseURL})

export {axiosServise}
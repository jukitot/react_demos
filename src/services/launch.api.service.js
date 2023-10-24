import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/',
    headers: {}
});

const getAllLaunches = () => {
    return axiosInstance.get('/launches');
}

export {getAllLaunches}
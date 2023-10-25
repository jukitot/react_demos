import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

const savePost = (post) => axiosInstance('', {data: post})


export {savePost}
import axios from "axios"

// const baseURL = "https://fitzone-api-98e9a005d7bf.herokuapp.com"
const baseURL = "http://192.168.47.35:5400"

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})

export default axiosInstance
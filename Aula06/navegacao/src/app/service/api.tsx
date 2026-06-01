import axios from "axios";

const api = axios.create({
    baseURL:"https://dig-huntress-arming.ngrok-free.dev/v1",
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})

export default api;
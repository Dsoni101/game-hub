import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "91040523ab094b6db9c8700b47adab0d"
    }
})
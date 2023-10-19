import axios from 'axios';

export const axiosApi = {
    local: axios.create({
        baseURL: "http://localhost:5050/api/"
    }),
    // remote: axios.create({
    //     baseURL: "https://www.yourwebsite.com/api/"
    // })
}


// console.log(axiosApi.defaults.baseURL)

// axiosApi.local.defaults.headers.common[
//     "Authorization"
// ] = `Bearer ${JSON.parse(localStorage.getItem("refreshToken"))}`
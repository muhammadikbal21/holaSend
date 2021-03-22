const axios = require('axios')

axios.defaults.headers.common['Authorization'] = 'Bearer ' + (localStorage.getItem('token') != null ? localStorage.getItem('token') : "")

axios.interceptors.response.use(function (response) {
    console.log(response);
    if (response.status !== 200) {
        throw new Error(response.statusText)
    }

    let data = response.data
    if (data.code !== 200) {
        throw new Error(data.message)
    }
    return data.data
}, function (error) {
    return Promise.reject(error)
})

export default axios
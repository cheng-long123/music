import axios from 'axios'

const request = axios.create({
  baseURL: 'https://autumnfish.cn/'

})
// 请求拦截器
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // const { status } = error.response
  // console.log(status)
  return Promise.reject(error)
})
export default request

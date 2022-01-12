import axios from 'axios'
import storage from './storage'
import Loading from './loading'
//正在loading状态的api接口

const instance = axios.create({
    baseURL: '/api',
    timeout: 50000,
})
const api = {}
//设置默认请求头信息
instance.defaults.headers = {
    'Authorization': storage.getToken(),
    'Content-Type': 'application/json;charset=UTF-8'
}
//请求发出前拦截
instance.interceptors.request.use(function (config) {
    //如果是需要进入loading状态 就可进入
    return config;
}, function (error) {
    return Promise.reject(error)
})
//请求响应拦截
instance.interceptors.response.use(function (response) {
    Loading.hidden()
    return response.data;
}, function (error) {
    return Promise.reject(error)
})
/**
 * get查询请求参数
 * @param url get请求url
 * @param params get请求参数
 * @param showLoading 是否显示loading状态
 * @returns {Promise<AxiosResponse<any>>}
 */
api.get = (url, params, showLoading = true) => {
    if (showLoading) {
        Loading.show()
    }
    return instance.get(url, {
        params
    })
}
/**
 * post请求
 * @param url 请求路由
 * @param data 请求的json数据
 * @param showLoading 是否显示全局loading
 * @returns {Promise<AxiosResponse<any>>}
 */
api.post = (url, data, showLoading = true) => {
    return instance.post(url, data)
}
export default api

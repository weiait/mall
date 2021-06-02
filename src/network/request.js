import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios的拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  },error => {
    //return error
  })

  // 2.2 响应拦截的作用
  instance.interceptors.response.use(config => {
    return config.data
  },error => {
    //return error
  })

  //3. 发送真正的网络请求
  return instance(config)
}

import axios from 'axios'
import router from '@/router'

const request = axios.create({
  headers: {},
  timeout: 1000 * 30,
  baseURL: '/cgi-bin/http.cgi',
  withCredentials: false,// 表示跨域请求时是否需要使用凭证
})

const cancelToken = axios.CancelToken;
let pending = []; //存储每个请求的取消函数和标识
// 请求拦截器
request.interceptors.request.use((config) => {
  config.method = 'post'
  config.cancelToken = new cancelToken((c) => {
    pending.push({ u: config.data.cmd + '&' + config.data.method, f: c });//cmd+method作为标识
  });
  return config;
}, (error) => {
  return Promise.reject(error);
});
// 响应拦截器
request.interceptors.response.use((response) => {
  if (!response.data.success && response.data.message == "NO_AUTH") {//sessionId失效
    sessionStorage.clear()
    router.push({ name: "login" });
  } else if (response.data && response.data.message == "LOGIN_TIMEOUT") {
    sessionStorage.clear()
    router.push({ name: "login" });
  }
  pendingPop(JSON.parse(response.config.data))//对已响应的接口删除
  return response.data;
}, (error) => {
  return Promise.reject(error);
});
//删除已响应的接口
const pendingPop = (e) => {
  for (let p in pending) {
    if (pending[p].u == e.cmd + '&' + e.method) {
      pending.splice(p, 1); //把这条记录从数组中移除
    }
  }
}
//method:'GET'
export const request_get = async (data) => {
  data.method = 'GET'
  data.sessionId = sessionStorage['sessionId'] || ''
  let res = await request({ data })
  return res
}
//method:'POST'
export const request_post = async (data, tag = true) => {
  data.method = 'POST'
  data.sessionId = sessionStorage['sessionId'] || ''
  if (!data.hasOwnProperty('token')) {
    data.token = sessionStorage['token'] || ''
  }
  let res = await request({ data })
  if (tag) request_get({ cmd: 104 }); //post接口额外传个true会执行刷新token
  return res
}
//上传文件
export const request_upload = async (data, options) => {
  data.method = 'POST'
  data.sessionId = sessionStorage['sessionId'] || ''
  data.token = sessionStorage['token'] || ''
  let url = `${baseURL}?cmd=${options.cmd}&method=POST&sessionId=${data.sessionId}`
  let res = await axios.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    timeout: 6000000
  })
  if (!res.data.success && res.data.message == "NO_AUTH") {
    sessionStorage.clear()
    router.push({ name: "login" });
  }
  return res.data
}
// 中断请求{cmd,method}
export const request_cancel = (e) => {
  for (let p in pending) {
    if (pending[p].u == e.cmd + '&' + e.method) { //当前请求在数组中存在时执行函数体
      pending[p].f(); //执行取消操作
      pending.splice(p, 1); //把这条记录从数组中移除
    }
  }
}
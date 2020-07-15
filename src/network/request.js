import Vue from 'vue'
import axios from 'axios'

export function request(param) {


  const a = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 8000
  })
  //请求拦截器
  a.interceptors.request.use(aaa => {
    console.log(aaa);
    return aaa;
  }, err => {
    console.log(err);
  });

  //响应拦截器
  a.interceptors.response.use(res => {
    console.log(res);
    return res;
  }, err => {
    console.log(err);
  });

  return a(param);
}


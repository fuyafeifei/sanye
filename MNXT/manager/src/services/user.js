import request from '../utils/request';

// 登陆接口
export function login(params){
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  })
}

// 获取当前用户ID
export function UserInfo() {
  return request({
    url:"/user/userInfo",
  });
}








    
  
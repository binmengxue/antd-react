//import $ from '@/api/api';
import request from '@/utils/request'
// 获取用户详细信息
/**
	* 登录
	* data: {username: 用户名    password: 密码    code: 验证码    remember: 自动登录}
*/
export function login(data) {
	return request({
	  url: '/api/user/login',
	  method: 'post',
	  data:data
	})
 }

 export function getMenu() {
	return request({
	  url: '/api/user/menu',
	  get: 'get',
	})
 }
 export function getMenu12() {
	return request({
	  url: '/api/manage/user/list',
	  get: 'get',
	})
 }


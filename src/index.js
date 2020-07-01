import 'core-js/es/map';
import 'core-js/es/set';
import 'antd/dist/antd.css';
import '@/assets/sass/reset.less';
import '@/assets/sass/admin.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';
import store from '@/store/index';
import {getMenu} from '@/api/login/login.js';
import { USER_MENU, USER_INFO } from '@/store/actionType';
require('@/mock/index');
//如果是登录状态，则刷新页面时需先获取到菜单后才能挂载路由页面
let token = localStorage.getItem('token');
if(!!token){
	//获取个人信息与系统菜单
	getMenu().then((res) => {
		if(res.success){
			store.dispatch({
				type: USER_MENU,
				data: res.data.menu
			})
			store.dispatch({
				type: USER_INFO,
				data: res.data.info
			})
			ReactDOM.render(
				<Router />,
				document.getElementById('root')
			);
		}
	})
}else{
	ReactDOM.render(
		<Router />,
		document.getElementById('root')
	);
}





import React from 'react';
import { HashRouter, Switch} from "react-router-dom";
import RouterAuth from '@/utils/routerComponent';
import NotFound from '@/view/public/notFound.jsx';
import Login from '@/view/login/login.jsx';
const routes = [
	{
		path: '/404',
		component:NotFound,
		exact: true
	},
	{
		path: '/login',
		component: Login,
		exact: true
	}
];
const BasicRoute = () => (
    <HashRouter>
		<Switch>
			<RouterAuth config={routes}></RouterAuth>
		</Switch>
    </HashRouter>
);

export default BasicRoute;
/*
HashRouter
1.用这个了就代表路径加上/#/
2.换成BrowserRouter了；路径就不需要加/#/
3.用HashRouter了就要把path的路径名字带上，如果首次加载默认的话要这样写： <Route exact path="/"  component={App}/>
*/

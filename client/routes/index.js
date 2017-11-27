import React from 'react';
import {createHistory} from 'history';
import App from 'pages/App';
import Index from 'pages/Index';
import {Router, Route, Redirect} from 'react-router';

const Container = () => {
	return (
		<Router history={createHistory()}>
			<Redirect from="/" to="index" />
			<Route path="/" component={App}>
				<Route path="index" component={Index} />
				<Route path="some-path" component={Index} />
			</Route>
		</Router>
	);
};

export default Container;

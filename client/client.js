import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {AppContainer} from 'react-hot-loader';

if (module.hot) {
	module.hot.accept('./routes', () => {
		render();
	});
}

const render = () => {
	ReactDOM.render(
		<AppContainer>
			<Routes />
		</AppContainer>,
		document.getElementById('content')
	);
};

render();

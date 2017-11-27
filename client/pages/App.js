import React, {Component} from 'react';
import {Link} from 'react-router';
import '../sass/global.scss';

export default class App extends Component {
	render() {
		return (
			<div className="application-container">
				<nav className="nav-bar">
					<ul>
						<li>
							<Link to="/index" className="nav-item" activeClassName="active">
								A
							</Link>
						</li>
						<li>
							<Link to="/some-path" className="nav-item" activeClassName="active">
								B
							</Link>
						</li>
					</ul>
				</nav>
				{this.props.children}
			</div>
		);
	}
}

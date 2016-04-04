const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, Redirect, Link, IndexLink, browserHistory } = require('react-router');
const routes = require('./routes');

const render = () => {

	ReactDOM.render(
		<Router history={browserHistory}>
			{routes}
		</Router>,
		document.getElementById('app')
	);

};

module.exports = render;

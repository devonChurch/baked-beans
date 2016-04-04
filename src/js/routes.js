const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, Redirect, Link, IndexLink, browserHistory } = require('react-router');
const HomePage = require('./home-page');
const ShowPage = require('./show-page');
const EpisodePage = require('./episode-page');

const routes = (
	<Route path="/">
		<IndexRoute component={HomePage} />
		<Route path="fruit">
			<IndexRoute component={ShowPage} foo={'bar'}/>
			<Route path="banana">
				<IndexRoute component={EpisodePage} foo={'bar'}/>
			</Route>
		</Route>
	</Route>
);

module.exports = routes;

'use strict';

const React = require('react');
const {Link} = require('react-router');

class HomePage extends React.Component {

	constructor() {

		console.log('** HomePage (constructor)');

		super();
		this.logMe = this.logMe.bind(this);

	}

	logMe() {

		console.log('** HomePage (clicked)');

	}

	render() {

		return (
			<div>
				<h1>Home page</h1>
				<button onClick={this.logMe}>Click me</button>
				<Link to="/">Home</Link>
				<Link to="/fruit">Fruit</Link>
				<Link to="/fruit/banana">Banana</Link>
			</div>
		);

	}

}

module.exports = HomePage;

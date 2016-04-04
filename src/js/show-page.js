'use strict';

const React = require('react');
const {Link} = require('react-router');

class ShowPage extends React.Component {

	constructor() {

		console.log('** ShowPage (constructor)');

		super();
		this.logMe = this.logMe.bind(this);

	}

	logMe() {

		console.log('** ShowPage (clicked)');

	}

	render() {

		return (
			<div>
				<h1>Show page</h1>
				<button onClick={this.logMe}>Click me</button>
				<Link to="/">Home</Link>
				<Link to="/fruit">Fruit</Link>
				<Link to="/fruit/banana">Banana</Link>
			</div>
		);

	}

}

module.exports = ShowPage;

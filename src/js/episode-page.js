'use strict';

const React = require('react');

class EpisodePage extends React.Component {

	render() {

		const json = this.props.json;

		console.log('');
		console.log('** -------COMPONENT------ **');
		console.log(json);
		console.log('** ------------- **');

		return (
			<div>
				<h1>Episode page</h1>
				<ul>
					<li>{json.directory}</li>
					<li>{json.title}</li>
					<li>{json.desc}</li>
				</ul>
			</div>
		);

	}

}

module.exports = EpisodePage;

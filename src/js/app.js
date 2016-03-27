'use strict';

// const feed = require('./feed');
const React = require('react');
const ReactDOM = require('react-dom');
const Immutable = require('immutable');
const Redux = require('redux');
const deepFreeze = require('deep-freeze');

// console.log(React);
// console.log(Redux);
// console.log(expect);
// console.log(deepFreeze);
// console.log(Immutable);

const reactions = {

	count(oldState, action) {

		deepFreeze(oldState);

		const posibilities = {
			'increase': (v) => v + 1,
			'decrease': (v) => v - 1
		};

		const newState = oldState.update(action.id, posibilities[action.direction]);

		return newState;

	},

	instance(oldState, action) {

		deepFreeze(oldState);

		const posibilities = {
			'add': () => oldState.push(0),
			'remove': () => oldState.pop()
		};

		const newState = posibilities[action.process]();

		return newState;

	}

};

const reducer = (state, action) => {

	const reaction = reactions[action.type];

	return reaction ? reaction(state, action) : state;

};

const baseState = Immutable.List.of(0);

const devTools = window.devToolsExtension ? window.devToolsExtension() : undefined;

let store = Redux.createStore(reducer, baseState, devTools);

store.subscribe(() => render());

const Instances = React.createClass({

	modify(process) {

		store.dispatch({
			type: 'instance',
			process
		});

	},

	render() {

		return (
			<ul>
				<li>
					<button onClick={this.modify.bind(this, 'add')}>Add</button>
				</li>
				<li>
					<button onClick={this.modify.bind(this, 'remove')}>Remove</button>
				</li>
			</ul>
		);
	}

});

const Counter = React.createClass({

	count(direction, id) {

		store.dispatch({
			type: 'count',
			direction,
			id
		});

	},

	render() {

		const state = this.props.state;

		return (
			<ul>
				{
					state.map((value, id) => {

						return (

							<li key={id}>
								<p>Counter: {value}</p>
								<button onClick={this.count.bind(this, 'decrease', id)}>-</button>
								<button onClick={this.count.bind(this, 'increase', id)}>+</button>
							</li>
						);
					})
				}
			</ul>
		);
	}

});

const render = () => {

	const state = store.getState();

	console.log(state);

	ReactDOM.render(
		<div>
			<Counter state={state}/>
			<Instances />
		</div>,
		document.getElementById('app')
	);

};

render();

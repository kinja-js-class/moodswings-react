import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { updateMood } from './actions/actions';

export class App extends React.Component {
	// mood emoj
	// location button
	// save button
	// list of saved moods
	render() {
		return (
			<div>
				<div id="mood-emoj">{this.props.currentMood}</div>
				<input id="mood-range" type="range" min="-100" max="100" value={this.props.moodValue} onChange= {(e) => this.props.dispatch(updateMood(e.target.value))} />
			</div>
	)}
}

function selector (state) {
	return state;
}

export default connect(selector)(App)

import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

export class App extends React.Component {
	// mood emoj
	// location button
	// save button
	// list of saved moods
	render() {
		return (
			<div>Mood Emoj</div>
	)}
}

function selector (state) {
	return state;
}

export default connect(selector)(App)

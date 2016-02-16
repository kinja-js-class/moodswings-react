import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { updateMood, saveCurrentMood } from './actions/actions';

export class App extends React.Component {
	getMoodImage(moodValue) {
	    return moodValue < -50 ? 'veryunhappy' :
	        moodValue >= -50 && moodValue < 0 ? 'unhappy' :
	        moodValue >= 0 && moodValue < 50 ? 'neutral' :
	        'happy';
	}

	// mood emoj
	// location button
	// save button
	// list of saved moods
	render() {
		return (
			<div>
				<div id="mood-emoj">
					<img src={`app/images/moods/${this.getMoodImage(this.props.moodValue)}.png`} />
				</div>
				<input id="mood-range" type="range" min="-100" max="100" value={this.props.moodValue} onChange= {(e) => this.props.dispatch(updateMood(e.target.value))} />
				<button onClick={(e) => this.props.dispatch(saveCurrentMood(this.props.moodValue))}>Save</button>
			</div>
	)}
}

function selector (state) {
	return state;
}

export default connect(selector)(App)

import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { updateMood, saveCurrentMood } from './actions/actions';

import { Moodlist } from './Moodlist.jsx'

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
				<input id="mood-range" type="range" min="-100" max="100" value={this.props.moodValue} onChange= {(e) => this.props.firedux.set('moodValue', e.target.value)} />
				<button id="save-mood" onClick={(e) => this.props.firedux.push('moods', {
					'mood': this.props.moodValue,
					'date': Date.now()
				})}>Save</button>
				<Moodlist moods={this.props.moods}/>
			</div>
	)}
}

function selector (state) {
	return state.data;
}

export default connect(selector)(App)

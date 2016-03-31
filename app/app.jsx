import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { updateposition, youAreLost } from './actions/actions';

import { Moodlist } from './Moodlist.jsx'

import { MoodSmiley } from './MoodSmiley.jsx'

import LoginButton from './LoginButton.jsx'

export class App extends React.Component {
	getMoodImage(moodValue) {
	    return moodValue < -50 ? 'veryunhappy' :
	        moodValue >= -50 && moodValue < 0 ? 'unhappy' :
	        moodValue >= 0 && moodValue < 50 ? 'neutral' :
	        'happy';
	}

	componentDidMount () {
		navigator.geolocation.getCurrentPosition(
			(position) => {
			console.log(position.coords)
			this.props.dispatch(updateposition({latitude: position.coords.latitude, longitude: position.coords.longitude}))
		}, (error)  => {
				this.props.dispatch(youAreLost())
		}, {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: Infinity
})
	}

	// mood emoj
	// location button
	// save button
	// list of saved moods
	render() {
		return (
			<div>
				<LoginButton firedux={firedux} />
				<MoodSmiley moodValue={this.props.moodValue} />
				<input id="mood-range" type="range" min="-100" max="100" value={this.props.moodValue} onChange= {(e) => this.props.firedux.set('moodValue', e.target.value)} />
				<button id="save-mood" onClick={(e) => this.props.firedux.push('moods', {
					'mood': this.props.moodValue,
					'date': Date.now(),
					'position': this.props.local.position,
					'uid': this.props.auth.uid
				})}>Save</button>
				<Moodlist moods={this.props.moods}/>
			</div>
	)}
}

function selector (state) {
	return {...state.firedux.data, local: state.local, auth: state.auth};
}

export default connect(selector)(App)

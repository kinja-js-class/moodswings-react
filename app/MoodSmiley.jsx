import React from 'react';
export class MoodSmiley extends React.Component {
	getMoodImage(moodValue) {
	    return moodValue < -50 ? 'veryunhappy' :
	        moodValue >= -50 && moodValue < 0 ? 'unhappy' :
	        moodValue >= 0 && moodValue < 50 ? 'neutral' :
	        'happy';
	}
	render () {
		return <div id="mood-emoj">
					<img title={this.props.moodValue} src={`app/images/moods/${this.getMoodImage(this.props.moodValue)}.png`} />
				</div>
	}
}

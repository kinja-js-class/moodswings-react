import React from 'react';
export class Moodlist extends React.Component {
	render () {
		return <ul>
						{Object.keys(this.props.moods).map( (moodkey) =>
							<li key={moodkey}>
								{this.props.moods[moodkey].mood}
							</li>
						)}
					</ul>
	}
}

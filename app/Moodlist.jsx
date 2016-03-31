import React from 'react';
import moment from 'moment';
import {MoodSmiley} from './MoodSmiley.jsx';

export class Moodlist extends React.Component {
	render () {
		return <table><tbody>
						{Object.keys(this.props.moods).reverse().map( (moodkey) =>
						 <tr key={moodkey}>
							<td>
								<abbr title={moment(this.props.moods[moodkey].date).format()}>{moment(this.props.moods[moodkey].date).fromNow()}</abbr>
							</td>
							<td>
								<div className="smallsmiley">
									<MoodSmiley moodValue={this.props.moods[moodkey].mood} />
								</div>
							</td>
							<td>
							{ this.props.moods[moodkey].position ?
									<p>🌐 {this.props.moods[moodkey].position.latitude, this.props.moods[moodkey].position.latitude}</p>
								: null
							}
							</td>
						</tr>
						)}
						</tbody></table>
	}
}

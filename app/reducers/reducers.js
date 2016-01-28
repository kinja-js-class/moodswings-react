const initialState = {
	currentMood: 'Neutral',
	moodValue: 0,
	moods: []
}

export function moodswingsApp(state = initialState, action) {
	switch (action.type) {
		case 'ADD_MOOD':
			return Object.assign({}, state, {
					moods: action.payload
				})
		default:
			return state;
	}
}

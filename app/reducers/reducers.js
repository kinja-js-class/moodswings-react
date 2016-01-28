const initialState = {
	currentMood: 'Neutral',
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

const initialState = {
	currentMood: 'Neutral',
	moodValue: 0,
	moods: []
};

export function moodswingsApp(state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_MOOD':
			return Object.assign({}, state, {
				moodValue: action.moodValue
			});
		default:
			return state;
	}
};

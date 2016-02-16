const initialState = {
	moodValue: 0,
	moods: []
};

export function moodswingsApp(state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_MOOD':
			return Object.assign({}, state, {
				moodValue: action.moodValue
			});
		case 'SAVE_CURRENT_MOOD':
			return Object.assign({}, state, {
				moods: [...state.moods, {
					moodValue: action.currentMoodValue,
					timeStamp: Date.now()
				}]
			});
		default:
			return state;
	}
};

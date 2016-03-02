// We are using firedux as prop and let it magic do the tricks
//

const initialState = {};
export function moodswingsApp(state=initialState, action) {
	switch (action.type) {
		case 'UPDATE_position':
			return Object.assign({}, state, {
				position: action.position
			});
		case 'UNKNOWN_position':
			return Object.assign({}, state, {
				position: " U R FUCKED"
			});
		default:
			return state;
	}

}

// We are using firedux as prop and let it magic do the tricks
//

const initialState = {};
export function moodswingsApp(state = initialState, action) {
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

const authInitialState = {
	auth: {
		currently: 'ANONYMOUS',
		username: null,
		uid: null
	}
}

export function authReducer(currentState = authInitialState, action) {
    switch (action.type) {
        case 'ATTEMPTING_LOGIN':
            return {
                currently: 'AWAITING_AUTH_RESPONSE',
                username: 'guest',
                uid: null
            };
        case 'LOGOUT':
            return {
                currently: 'ANONYMOUS',
                username: 'guest',
                uid: null
            };
        case 'LOGIN_USER':
            return {
                currently: 'LOGGED_IN',
                username: action.username,
                uid: action.uid
            };
        default:
            return currentState;
    }
};

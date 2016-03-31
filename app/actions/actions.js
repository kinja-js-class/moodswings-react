// We are using firedux as prop and let it magic do the tricks
export function updateposition(position) {
    return {
        type: 'UPDATE_position',
        position: position
    }
}

export function youAreLost() {
    return {
        type: 'UNKNOWN_position'
    }
}

export function attemptLogin(dispatch, firedux) {
    return function(dispatch, getState) {
        dispatch({ type: 'ATTEMPTING_LOGIN' });
        firedux.ref.authWithOAuthPopup('google', function(error, authData) {
            if (error) {
                dispatch({ type: 'DISPLAY_ERROR', error: "Login failed! " + error });
                dispatch({ type: 'LOGOUT' });
            } else {
                // no need to do anything here, startListeningToAuth have already made sure that we update on changes
            }
        });
    }
}

export function startListeningToAuth(dispatch, firedux) {
    return function(dispatch, getState) {
        firedux.ref.onAuth(function(authData) {
            if (authData) {
                dispatch({
                    type: 'LOGIN_USER',
                    uid: authData.uid,
                    username: authData.google.displayName || authData.google.username
                });
            } else {
                if (getState().auth.currently !== 'ANONYMOUS') { // log out if not already logged out
                    dispatch({ type: 'LOGOUT' });
                }
            }
        });
    }
}

export function logoutUser(dispatch, firedux){
    return function(dispatch, getState){
        dispatch({type: 'LOGOUT'});
        firedux.ref.unauth();
    };
}
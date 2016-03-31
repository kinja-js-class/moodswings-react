import React from 'react';
import { connect } from 'react-redux';
import { attemptLogin, startListeningToAuth } from './actions/actions';

class LoginButton extends React.Component {
	handleAuth() {
		this.props.dispatch(attemptLogin(this.props.dispatch, this.props.firedux));
	}
	render () {
		return <button onClick={this.handleAuth.bind(this)}>Login</button>
	}
}

function selector (state) {
	return {...state.firedux.data, local: state.local};
}

export default connect(selector)(LoginButton);
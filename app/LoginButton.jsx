import React from 'react';
import { connect } from 'react-redux';
import { attemptLogin, startListeningToAuth, logoutUser } from './actions/actions';

class LoginButton extends React.Component {
	Login() {
		this.props.dispatch(attemptLogin(this.props.dispatch, this.props.firedux));
	}
	Logout() {
		this.props.dispatch(logoutUser(this.props.dispatch, this.props.firedux));
	}
	render () {
		return this.props.auth.uid ?  <button onClick={this.Logout.bind(this)}>Logout</button> : <button onClick={this.Login.bind(this)}>Login</button>
	}
}

function selector (state) {
	return {...state.firedux.data, local: state.local, auth: state.auth};
}

export default connect(selector)(LoginButton);
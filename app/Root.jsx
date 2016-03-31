import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


import DevTools from './devtools'

import { moodswingsApp, authReducer } from './reducers/reducers'


import App from './app.jsx'
import { startListeningToAuth } from './actions/actions'

import Firedux from 'firedux'

const firedux = new Firedux({
  url: 'https://amber-fire-5100.firebaseio.com/',

  // Optional:
  omit: ['$localState'] // Properties to reserve for local use and not sync with Firebase.
})

const reducer =  combineReducers({
	firedux: firedux.reducer(),
	local: moodswingsApp,
	auth: authReducer
})


// create store with middleware, including thunk.
const store = createStore(
  reducer,
	{local: [], firedux: {data: {moods: {}}},
		auth: {
			currently: 'ANONYMOUS',
			username: null,
			uid: null
	}},
  compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )
)


firedux.dispatch = store.dispatch

firedux.init()

firedux.watch('moodValue');
firedux.watch('moods');
window.firedux = firedux


class Root extends React.Component {
	render () {
		return (
			<Provider store={store}>
				<div>
					<App firedux={firedux}/>
					<DevTools />
				</div>
			</Provider>

		)
	}
}

ReactDOM.render(<Root />, document.getElementById('moodswings'))


// setup Firebase listeners
setTimeout(function(){
	store.dispatch( startListeningToAuth(store.dispatch, firedux) );
});

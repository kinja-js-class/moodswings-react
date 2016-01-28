import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import DevTools from './devtools'

import { moodswingsApp } from './reducers/reducers'

let store = compose( DevTools.instrument())(createStore)(moodswingsApp)

import App from './app.jsx'

class Root extends React.Component {
	render () {
		return (
			<Provider store={store}>
				<div>
					<App />
					<DevTools />
				</div>
			</Provider>

		)
	}
}

ReactDOM.render(<Root />, document.getElementById('moodswings'))

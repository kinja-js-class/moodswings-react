import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';

// React components
import { App } from '../app/app.jsx'

// Reducers
import { moodswingsApp } from '../app/reducers/reducers';

describe('moodswings tests', () => {
	it('should find the MoodEmoj element', () => {
		const wrapper = shallow(<App />);
		chai.expect(wrapper.find('#mood-emoj')).to.have.length(1);
	});
	it('#mood-emoj should display mood', () => {
		const wrapper = shallow(<App currentMood="Neutral" />);
		chai.expect(wrapper.text()).to.contain('Neutral');
	});
	it('should find the #mood-range element', () => {
		const wrapper = shallow(<App />);
		chai.expect(wrapper.find('#mood-range')).to.have.length(1);
	});
});

describe('moodswingsApp reducer tests', () => {
	it('state should be equal to initialState fixture', () => {
		const initialStateFixture = {
			currentMood: 'Neutral',
			moodValue: 0,
			moods: []
		};
		const actualState = moodswingsApp(undefined, {});
		chai.expect(actualState).to.deep.equal(initialStateFixture);
	});
});
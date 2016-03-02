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
	it('#mood-emoj should display an image', () => {
		const wrapper = shallow(<App moodValue="0" />);
		chai.expect(wrapper.html()).to.contain('<img src="app/images/moods/neutral.png"/>');
	});
	it('should find the #mood-range element', () => {
		const wrapper = shallow(<App />);
		chai.expect(wrapper.find('#mood-range')).to.have.length(1);
	});
	it('the #mood-range input should have value equal to passed moodValue', () => {
		const wrapper = shallow(<App moodValue="0" />);
		const rangeInput = wrapper.find('#mood-range');
		chai.expect(rangeInput.props().value).to.equal('0');
	});
});

describe('moodswingsApp reducer tests', () => {
	it('state should be equal to initialState fixture', () => {
		const initialStateFixture = {
			moodValue: 0,
			moods: []
		};
		const actualState = moodswingsApp(undefined, {});
		chai.expect(actualState).to.deep.equal(initialStateFixture);
	});
});
import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';

// React components
import { App } from '../app/app.jsx'

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
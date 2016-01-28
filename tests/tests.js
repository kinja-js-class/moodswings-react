import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';

// React components
import { App } from '../app/app.jsx'

describe('moodswings tests', () => {
	it('should find the MoodEmoj component', () => {
		const wrapper = shallow(<App />);
		chai.expect(wrapper.find('#mood-emoj')).to.have.length(1);
	});
});
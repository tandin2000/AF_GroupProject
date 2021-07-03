import Form from '../components/Register'
import {getByTestId, render } from '@testing-library/react'

let container = null;

describe ('Testing Index file that contain a form ', () => {
	beforeEach (() => {
 		container = render(<Form />).container;
	})

	it('should render from tag' , () => {
		expect(getByTestId(container, 'from-tag')).toBeTruthy();
	});

	it('should render Input filed' , () => {
		expect(getByTestId(container, 'input-field')).toBeTruthy();
	});
	
	it('should render Submit Button' , () => {
		expect(getByTestId(container, 'submit-btn')).toBeTruthy();
	});

});
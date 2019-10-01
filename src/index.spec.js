import ReactDOM from 'react-dom';
import {renderToDOM} from './index';

jest.mock('react-dom');
jest.mock('react-redux');
jest.mock('react');


describe('test ReactDOM.render', () => {
    const originalRender = ReactDOM.render;
    const originalGetElement = window.document.getElementById;
    beforeEach(() => {
        window.document.getElementById = () => true;
        ReactDOM.render = jest.fn();
    });
    afterAll(() => {
        window.document.getElementById = originalGetElement;
        ReactDOM.render = originalRender;
    });
    it('should call ReactDOM.render', () => {
        renderToDOM();
        expect(ReactDOM.render).toHaveBeenCalled();
    });
});

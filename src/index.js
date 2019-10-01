import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './state/store';
import App from './App';

const renderToDOM = () => {
    const root = document.getElementById('root');
    if (root) {
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>
            , root);
    }
};
export {renderToDOM}

renderToDOM();

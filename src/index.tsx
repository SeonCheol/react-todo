import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import modules from 'src/modules'

const store = createStore(modules)
console.log(store)

ReactDOM.render(
    <Provider store={store}>
        < App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

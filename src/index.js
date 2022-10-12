import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '~/store/reducer/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
// AIzaSyCWGV8dYz8LFiPMiCFeGzkrLx7KDvkFi4M
const reduxStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
);

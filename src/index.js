// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/tasks'; // Create your reducers
import App from './App';


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    {/* Your App component here */}
    <App />
  </Provider>,
  document.getElementById('root')
);

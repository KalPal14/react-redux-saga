import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { forbiddenWordsMiddleware } from './redux/middleware';
import rootReducer from './redux/rootReducer';
import { sagaWatcher } from '../src/redux/sagas'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, forbiddenWordsMiddleware, saga)
))

saga.run(sagaWatcher())

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

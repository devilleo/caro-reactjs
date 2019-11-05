// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import middleware from "./middleware";
import thunk from "redux-thunk";
import { loadState, saveState } from "./localStorage/localStorage";
// import ShowGame from "./containers/ShowGame";
// import App from './components/App'
import AppContainer from "./containers/AppContainer";

import configureSocket from "./Config/Socket"

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(middleware, thunk)
);

// setup socket connection
export const socket = configureSocket(store.dispatch);

store.subscribe(() => {
  saveState(store.getState());
})

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

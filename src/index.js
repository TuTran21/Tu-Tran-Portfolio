import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./js/router/AppRouter";
import store from "./js/redux/store/store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// import * as serviceWorker from './serviceWorker'; //Run offline // Progressive web app

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App></App>
    </Provider>
  </BrowserRouter>,
  document.getElementById("main-wrapper")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

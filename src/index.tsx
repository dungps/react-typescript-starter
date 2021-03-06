import React from "react";
import ReactDOM from "react-dom";
import Root from "./core/Root";
import * as serviceWorker from "./core/init/serviceWorker";
import history from "./core/init/history";
import configureStore from "./redux/configureStore";

const store = configureStore();

ReactDOM.render(
  <Root history={history} store={store} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

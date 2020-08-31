import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store from "./redux/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter>
        <App />
      </AppRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import rootReducer from "./redux/reducer/index";
import App from "./App";

const store = configureStore({
  reducer: rootReducer,
});

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

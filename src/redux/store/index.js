import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "../slices/history";
import payloadReducer from "../slices/payload";

export default configureStore({
  reducer: {
    history: historyReducer,
    payload: payloadReducer,
  },
});

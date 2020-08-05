import { combineReducers } from "redux";
import historyReducer from "../slices/history";
import payloadReducer from "../slices/payload";

export default combineReducers({
  history: historyReducer,
  payload: payloadReducer,
});

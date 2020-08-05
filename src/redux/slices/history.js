import { createSlice } from "@reduxjs/toolkit";
import { getHistory } from "../../api/getSpaceXApi";

const historyInitialState = {
  data: [],
  isLoading: false,
  error: null,
};

function startLoading(state) {
  state.isLoading = true;
}

function loadingFailed(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const historySlice = createSlice({
  name: "history",
  initialState: historyInitialState,
  reducers: {
    getHistoryStart: startLoading,
    getHistorySuccess: {
      reducer(state, action) {
        state.data.push(...action.payload);
        state.isLoading = false;
        state.error = null;
      },
    },
    getHistoryFailure: loadingFailed,
  },
});

export const {
  getHistoryStart,
  getHistorySuccess,
  getHistoryFailure,
} = historySlice.actions;

export default historySlice.reducer;

export const fetchHistory = () => async (dispatch) => {
  try {
    dispatch(getHistoryStart());
    const data = await getHistory();
    dispatch(getHistorySuccess(data));
  } catch (err) {
    dispatch(getHistoryFailure(err.toString()));
  }
};

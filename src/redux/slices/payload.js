import { createSlice } from "@reduxjs/toolkit";
import { getPayload } from "../../api/getSpaceXApi";

const payloadInitialState = {
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

const payloadSlice = createSlice({
  name: "payload",
  initialState: payloadInitialState,
  reducers: {
    getPayloadStart: startLoading,
    getPayloadSuccess: {
      reducer(state, action) {
        state.data.push(...action.payload);
        state.isLoading = false;
        state.error = null;
      },
    },
    getPayloadFailure: loadingFailed,
  },
});

export const {
  getPayloadStart,
  getPayloadSuccess,
  getPayloadFailure,
} = payloadSlice.actions;

export default payloadSlice.reducer;

export const fetchPayload = () => async (dispatch) => {
  try {
    dispatch(getPayloadStart());
    const data = await getPayload();
    dispatch(getPayloadSuccess(data));
  } catch (err) {
    dispatch(getPayloadFailure(err.toString()));
  }
};

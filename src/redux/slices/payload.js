import { createSlice } from "@reduxjs/toolkit";
import { getPayload } from "../../api/getSpaceXApi";
import uuid from "../../utils/uuid";

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
        //Adding unique id to each payload & setting activeTabKey on it
        action.payload.map((item) => {
          item.id = uuid();
          item.activeTabKey = item.id + "1";
          return null;
        });
        state.data.push(...action.payload);
        state.isLoading = false;
        state.error = null;
      },
    },
    getPayloadFailure: loadingFailed,
    changePayloadActiveTabKey: (state, action) => {
      const id = action.payload.slice(0, action.payload.length - 1);
      state.data.map((item) => {
        if (item.id === id) {
          item.activeTabKey = action.payload;
        }
        return null;
      });
    },
  },
});

export const {
  getPayloadStart,
  getPayloadSuccess,
  getPayloadFailure,
  changePayloadActiveTabKey,
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

// export const changeActiveTabKey = (key, dispatch) => {
//   dispatch(changePayloadActiveTabKey(key));
// };

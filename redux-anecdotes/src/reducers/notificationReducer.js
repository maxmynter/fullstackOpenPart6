import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    notify(state, action) {
      return {
        text: `Voted for anecdote: ${action.payload.content}`,
      };
    },
    setTimeOutID(state, action) {
      return {
        ...state,
        timeOutID: action.payload,
      };
    },
    removeNotification(state, action) {
      clearTimeout(action.payload);
      return {};
    },
  },
});

export const { notify, removeNotification, setTimeOutID } =
  notificationSlice.actions;

export const setTimedNotification = (content, timing = 5000) => {
  return async (dispatch, getState) => {
    await dispatch(removeNotification(getState().notification.timeOutID));
    await dispatch(notify({ content }));
    await dispatch(
      setTimeOutID(
        setTimeout(() => {
          dispatch(removeNotification(getState().notification.timeOutID));
        }, timing)
      )
    );
  };
};

export default notificationSlice.reducer;

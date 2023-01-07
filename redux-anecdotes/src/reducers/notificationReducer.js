import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    notify(state, action) {
      return state.concat({
        text: `Voted for anecdote: ${action.payload}`,
      });
    },
    removeNotification(state, action) {
      return state.filter(
        (notification) => !notification.text.includes(action.payload)
      );
    },
  },
});

export const { notify, removeNotification } = notificationSlice.actions;

export const setTimedNotification = (content, timing = 5000) => {
  return async (dispatch) => {
    await dispatch(notify(content));
    setTimeout(() => {
      dispatch(removeNotification(content));
    }, timing);
  };
};

export default notificationSlice.reducer;

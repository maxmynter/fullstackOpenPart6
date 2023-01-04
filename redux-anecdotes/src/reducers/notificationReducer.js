import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "Default Notification",
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    notify(state, action) {
      return initialState;
    },
  },
});
export const { notify } = notificationSlice.actions;
export default notificationSlice.reducer;

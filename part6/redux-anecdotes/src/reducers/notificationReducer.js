import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  duration: 0,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setAddAnecdoteMessage(state) {
      state.message = "Has creado una anecdota correctamente";
      state.duration = 3;
    },
    setvoteAnecdoteMessage(state, action) {
      state.message = `Has votado una anecdota: ${action.payload}`;
      state.duration = 3;
    },
    setCustomMessage(state, action) {
      const { message, duration } = action.payload;
      (state.message = message), (state.duration = duration);
    },
    clearMessage(state) {
      state.message = "";
      state.duration = 0;
    },
  },
});

export const setNotificationWithTimeout = (message, durationInSeconds) => {
  return (dispatch) => {
    dispatch(setCustomMessage({ message, durationInSeconds }));
    setTimeout(() => {
      dispatch(clearMessage());
    }, durationInSeconds * 1000);
  };
};

export const {
  setAddAnecdoteMessage,
  setvoteAnecdoteMessage,
  clearMessage,
  setCustomMessage,
} = notificationSlice.actions;

export default notificationSlice.reducer;

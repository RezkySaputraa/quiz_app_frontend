import { createSlice } from "@reduxjs/toolkit";

export const progressBarSlice = createSlice({
  name: "progressBar",
  initialState: {
    isToggle: false || localStorage.getItem("status"),
  },
  reducers: {
    setToggle: (state, action) => {
      state.isToggle = action.payload;
    },
  },
});

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    memorize: false,
    question: false,
  },
  reducers: {
    showAlert: (state, action) => {
      state[action.payload] = true;
    },
    hideAlert: (state, action) => {
      state[action.payload] = false;
    },
  },
});

export const selectorAlert = (state, action) => state.alert[action];
export const { setToggle } = progressBarSlice.actions;
export const { showAlert, hideAlert } = alertSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToNotes: (state, action) => {},
    updateToNotes: (state, action) => {},
    resetAllNotes: (state, action) => {},
    removeFromNotes: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToNotes, updateToNotes, resetAllNotes, removeFromNotes } =
  pasteSlice.actions;

export default pasteSlice.reducer;

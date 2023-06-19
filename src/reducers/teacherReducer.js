import { createReducer } from "@reduxjs/toolkit";

export const teacherReducer = createReducer(
  { teachers: [] },
  {
    allTeachersRequest: (state) => {
      state.loading = true;
    },
    allTeachersSuccess: (state, action) => {
      state.loading = false;
      state.teachers = action.payload;
    },
    allTeachersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    topTeachersRequest: (state) => {
      state.loading = true;
    },
    topTeachersSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    topTeachersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);

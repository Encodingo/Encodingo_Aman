import { createReducer } from "@reduxjs/toolkit";

export const top3courseReducer = createReducer(
  { top3courses: [] },
  {
    topCoursesRequest: (state) => {
      state.loading = true;
    },
    topCoursesSuccess: (state, action) => {
      state.loading = false;
      state.top3courses = action.payload;
    },
    topCoursesFail: (state, action) => {
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

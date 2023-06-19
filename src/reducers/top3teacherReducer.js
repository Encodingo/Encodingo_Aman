import { createReducer } from "@reduxjs/toolkit";

export const top3teacherReducer = createReducer(
    { top3teachers: [] },
    {
      topTeachersRequest: (state) => {
        state.loading = true;
      },
      topTeachersSuccess: (state, action) => {
        state.loading = false;
        state.top3teachers = action.payload;
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
  
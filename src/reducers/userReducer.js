// import {
//   LOGIN_REQUEST,
//   LOGIN_FAIL,
//   LOGIN_SUCCESS,
//   REGISTER_USER_REQUEST,
//   REGISTER_USER_SUCCESS,
//   REGISTER_USER_FAIL,
//   LOAD_USER_REQUEST,
//   LOAD_USER_SUCCESS,
//   LOAD_USER_FAIL,
//   LOGOUT_SUCCESS,
//   LOGOUT_FAIL,
//   CLEAR_ERRORS,
// } from "../constants/userConstants";

// reducer for login , register and logout
import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer(
  {},
  {
    loginRequest: state => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.isVarified = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.isVarified = true;
      state.error = action.payload;
    },

    registerRequest: state => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.isVarified = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isVarified = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    verificationRequest: (state) => {
      state.loading = true;
    },
    verificationSuccess: (state, action) => {
      state.loading = false;
      state.isVarified = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    verificationFailure: (state, action) => {
      state.loading = false;
      state.isVarified = false;
      state.error = action.payload;
    },

    loadUserRequest: state => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.isVarified = true;
      state.user = action.payload;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.isVarified = false;
      state.error = action.payload;
    },

    logoutRequest: state => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isVarified = true;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isVarified = true;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);


export const profileReducer = createReducer(
  {},
  {
    updateProfileRequest: state => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateProfilePictureRequest: state => {
      state.loading = true;
    },
    updateProfilePictureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateProfilePictureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    changePasswordRequest: state => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    changePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    forgetPasswordRequest: state => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    forgetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    resetPasswordRequest: state => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    removeFromPlaylistRequest: state => {
      state.loading = true;
    },
    removeFromPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    removeFromPlaylistFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);